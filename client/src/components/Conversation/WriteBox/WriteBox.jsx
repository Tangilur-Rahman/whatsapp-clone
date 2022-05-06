import "./WriteBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinHearts } from "@fortawesome/free-regular-svg-icons";
import Picker from "emoji-picker-react";
import { useState } from "react";

const WriteBox = () => {
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

	const submitHandler = (event) => {
		event.preventDefault();
	};

	console.log(message);
	return (
		<div className="container-fluid p-0 ">
			<div className="row m-0">
				<div className="col write-box-container">
					<form onSubmit={submitHandler}>
						<div className="write-box">
							{toggle && (
								<Picker
									onEmojiClick={onEmojiClick}
									pickerStyle={{
										position: "absolute",
										bottom: "60px",
										width: "50%",
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

						<button className="btn btn-success" type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default WriteBox;
