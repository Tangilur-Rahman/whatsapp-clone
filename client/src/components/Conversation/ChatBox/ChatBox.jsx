import "./ChatBox.css";
import TextContainer from "./TextContainer";


const ChatBox = ({messages}) => {
	return (
		<>
			1
			<div className="container-fluid p-0">
				<div className="row  chat-box-container">
					<div className="col p-0 ">
						{messages &&
							messages.map((value, index) => (
								<div key={index}>
									<TextContainer obj={value} />
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatBox;
