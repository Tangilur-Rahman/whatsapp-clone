import ChatList from "./ChatList/ChatList";
import "./ContactList.css";
import Header from "./Header/Header";
import SearchBox from "./SearchBox/SearchBox";

const ContactList = () => {
	return <>
   
    <div className="container-fluid contact-container p-0">
       <Header />
       <SearchBox/>
       <ChatList/>
    </div>
    
    </>;
};

export default ContactList;
