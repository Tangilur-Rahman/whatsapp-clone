import ChatItem from "./ChatItem"
import "./ChatList.css"

const ChatList = () => {
  return (
    <>
       <div className="container-fluid p-0">
          <div className="row">
             <div className="col chat-list-container">

              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
              <ChatItem/>
               
             </div>
          </div>
       </div>
    </>
  )
}

export default ChatList