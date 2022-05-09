import ChatList from "./ChatList/ChatList";
import "./ContactList.css";
import Header from "./Header/Header";
import SearchBox from "./SearchBox/SearchBox";

const ContactList = (props) => {
	return (
		<>
			<div className="container-fluid contact-container p-0 ">
				<Header />
				<SearchBox />
				<ChatList setSelectedChat={props.setSelectedChat} />
			</div>
		</>
	);
};

export default ContactList;
