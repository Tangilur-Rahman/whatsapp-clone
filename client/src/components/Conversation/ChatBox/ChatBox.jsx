import "./ChatBox.css";
import TextContainer from "./TextContainer";
import messageListJson from "./../../../JSON/messageList.json";

const ChatBox = ({ messageList, currentUser }) => {
	return (
		<>
			1
			<div className="container-fluid p-0">
				<div className="row  chat-box-container">
					<div className="col p-0 ">
						{messageListJson &&
							messageListJson.map((value, index) => (
								<div key={index}>
									<TextContainer obj={value} currentUser={currentUser} />
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatBox;
