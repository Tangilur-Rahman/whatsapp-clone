import { useState } from "react";
import ChatList from "./ChatList/ChatList";
import "./ContactList.css";
import Header from "./Header/Header";
import SearchBox from "./SearchBox/SearchBox";

const ContactList = (props) => {
	const [searchUser, setSearchUser] = useState("");

	return (
		<>
			<div className="container-fluid contact-container p-0 ">
				<Header />

				<SearchBox setSearchUser={setSearchUser} />
				<ChatList
					setSelectedChat={props.setSelectedChat}
					searchUser={searchUser}
				/>
			</div>
		</>
	);
};

export default ContactList;
