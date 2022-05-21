import ChatBox from "./ChatBox/ChatBox";
import "./Conversation.css";
import DefaultPage from "./DefaultPage/DefaultPage";
import Header from "./Header/Header";
import MessageBox from "./MessageBox/MessageBox";


const Conversation = ({ selectedChat, currentUser,messageListObj }) => {

	const {messageList,setMessageList} = messageListObj;

	return (
		<>
			<div className="container-fluid conversation-container p-0 ">
				{selectedChat ? (
					<>
						<Header selectedChat={selectedChat} />
						<ChatBox
							messageList={messageList}
							currentUser={currentUser}
						/>
						<MessageBox
							setMessageListObj={{ messageList, setMessageList }}
							selectedChat={selectedChat}
							currentUser={currentUser}
						/>
					</>
				) : (
					<DefaultPage />
				)}
			</div>
		</>
	);
};

export default Conversation;
