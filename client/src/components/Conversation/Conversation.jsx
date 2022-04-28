import ChatBox from "./ChatBox/ChatBox"
import "./Conversation.css"
import Header from "./Header/Header"
import WriteBox from "./WriteBox/WriteBox"

const Conversation = () => {
  return (
    <>
       <div className="container-fluid conversation-container p-0 ">
          <Header/>
          <ChatBox/>
          <WriteBox/>
       </div>
    </>
  )
}

export default Conversation