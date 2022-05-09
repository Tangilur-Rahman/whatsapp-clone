import ChatBox from "./ChatBox/ChatBox"
import "./Conversation.css"
import DefaultPage from "./DefaultPage/DefaultPage"
import Header from "./Header/Header"
import MessageBox from "./MessageBox/MessageBox";
import messageList from "./../../JSON/messageList";
import { useState } from "react"

const Conversation = ({selectedChat}) => {

	const [messages, setMessages] = useState(messageList);

  return (
		<>
			<div className="container-fluid conversation-container p-0 ">
				{selectedChat ? (
					<>
						<Header selectedChat={selectedChat} />
						<ChatBox messages={messages} />
						<MessageBox setMessages={{ messages, setMessages }} />
					</>
				) : (
					<DefaultPage />
				)}
			</div>
		</>
	);
}

export default Conversation