import "./ChatBox.css";
import TextContainer from "./TextContainer";
import demo from "./../../../JSON/demo.json"

const ChatBox = () => {
	return (
		<>1
			<div className="container-fluid p-0">
				<div className="row  chat-box-container">
					<div className="col p-0 ">
						{demo &&
							demo.map((value, index) => (
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
