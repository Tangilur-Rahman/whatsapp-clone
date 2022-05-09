/* eslint-disable no-unused-vars */
import { faFaceGrinHearts } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picker from "emoji-picker-react";
import { useState } from "react";
import "./MessageBox.css";

const MessageBox = (props) => {
	const { messages, setMessages } = props.setMessages;

	const [chosenEmoji, setChosenEmoji] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [message, setMessage] = useState("");

	const onEmojiClick = (event, emojiObject) => {
		setChosenEmoji(emojiObject);
		setMessage(message + emojiObject.emoji);
		setToggle(false);
	};

	const onChange = (event) => {
		setMessage(event.target.value);
	};

	const clickHandler = (event) => {
		event.preventDefault();

		setMessages([
			...messages,
			{
				id: 0,
				messageType: "TEXT",
				message,
				senderID: 0,
				addedOn: "12:01 PM"
			}
		]);
	};

	const onEnterPress = (event) => {
		if (event.key === "Enter") {
			setMessages([
				...messages,
				{
					id: 0,
					messageType: "TEXT",
					message,
					senderID: 0,
					addedOn: "12:01 PM"
				}
			]);
		}
	};

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
								onKeyDown={onEnterPress}
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
		</div>
	);
};

export default MessageBox;
