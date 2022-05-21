import { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ChatList.css";

const ChatList = (props) => {
	const { setSelectedChat, searchUser,setMessageList } = props;

	const [users, setUsers] = useState("");

	const getAllUsers = async () => {
		try {
			const response = await fetch("/users");

			const result = await response.json();

			setUsers(result);
		} catch (error) {
			toast("Server Error! Try Again Latter 🙏", {
				position: "top-right",
				autoClose: 2000,
				theme: "dark"
			});
		}
	};

	useEffect(() => {
		getAllUsers();
	}, []);

	return (
		<>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col chat-list-container">
						{searchUser
							? searchUser &&
							  searchUser.map((value, index) => (
									<ChatItem
										obj={value}
										key={index}
										setSelectedChat={setSelectedChat}
										setMessageList = {setMessageList}
									/>
							  ))
							: users &&
							  users.map((value, index) => (
									<ChatItem
										obj={value}
										key={index}
										setSelectedChat={setSelectedChat}
									/>
							  ))}
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default ChatList;
