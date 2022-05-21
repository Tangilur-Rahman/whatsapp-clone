import "./ChatBox.css";
import TextContainer from "./TextContainer";

const ChatBox = ({ messageList, currentUser }) => {

	console.log(messageList)
	
	return (
		<>
			1
			<div className="container-fluid p-0">
				<div className="row  chat-box-container">
					<div className="col p-0 ">
						{messageList &&
							messageList.map((value, index) => (
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
