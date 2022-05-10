/* eslint-disable no-unused-vars */
import { faFaceGrinHearts } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picker from "emoji-picker-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MessageBox.css";

const MessageBox = (props) => {
	const { selectedChat, currentUser, setMessageListObj } = props;

	const { messageList, setMessageList } = setMessageListObj;

	const [chosenEmoji, setChosenEmoji] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [message, setMessage] = useState("");
	const [channel, setChannel] = useState("");

	const onEmojiClick = (event, emojiObject) => {
		setChosenEmoji(emojiObject);
		setMessage(message + emojiObject.emoji);
		setToggle(false);
	};

	const onChange = (event) => {
		setMessage(event.target.value);
	};

	const clickHandler = async (event) => {
		event.preventDefault();

		if (!messageList || !messageList.length) {

			const channelArray = [
				{
					name: currentUser.name,
					email: currentUser.email,
					profilePic: currentUser.profilePic
				},
				{
					name: selectedChat.name,
					email: selectedChat.email,
					profilePic: selectedChat.profilePic
				}
			];

			try {
				const response = await fetch("/channel", {
					method: "POST",
					body: JSON.stringify(channelArray),
					headers: { "Content-Type": "application/json" }
				});

				const result = await response.json();

				setChannel(result);

			} catch (error) {
				toast("Server Error! Try Again Latter 🙏", {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
			}
		}

			try {
				const response = await fetch("/channel/messages");

				const result = await response.json();

				setMessageList(result);

				console.log(result)
				

			} catch (error) {
				console.log(error.message);
			}


			try {
				const sendMessage = {
					senderEmail: currentUser.email,
					message,
					addedOn: new Date().getTime()
				};

				const response = await fetch("/channel", {
					method: "PUT",
					body: JSON.stringify(sendMessage),
					headers: { "Content-Type": "application/json" }
				});

				const result = await response.json();

				setMessageList([...messageList, sendMessage]);
			} catch (error) {
				console.log(error.message);
			}
		};
		console.log(messageList);
	

	return (
		<div className="container-fluid p-0 ">
			<div className="row m-0">
				<div className="col write-box-container">
					<form>
						<div className="write-box">
							{toggle && (
								<Picker
									onEmojiClick={onEmojiClick}
									pickerStyle={{
										position: "absolute",
										bottom: "60px",
										width: "50%"
									}}
									className="emoji"
								/>
							)}

							<FontAwesomeIcon
								icon={faFaceGrinHearts}
								className="icon"
								onClick={() => setToggle(!toggle)}
							/>

							<input
								type="text"
								name="Write"
								id="Write"
								placeholder="Type a message... "
								onFocus={() => setToggle(false)}
								onChange={onChange}
								autoComplete="off"
								value={message}
							/>
						</div>

						<button
							className="btn btn-success"
							type="submit"
							onClick={clickHandler}
						>
							Send
						</button>
					</form>
				</div>
			</div>
			<ToastContainer/>
		</div>
	);
};

export default MessageBox;
