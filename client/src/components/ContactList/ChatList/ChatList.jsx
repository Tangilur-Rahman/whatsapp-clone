import ChatItem from "./ChatItem";
import "./ChatList.css";
import friendList from "./../../../JSON/friendList.json";

const ChatList = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col chat-list-container">
						{friendList && friendList.map((value, index) => <ChatItem obj={value} key={index}/>)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatList;
