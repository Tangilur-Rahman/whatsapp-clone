/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// own modules
import ContactList from "../../components/ContactList/ContactList";
import Conversation from "../../components/Conversation/Conversation";
import Loading from "../../components/Loading/Loading";
import "./DashboardPage.css";

const DashboardPage = () => {
	// For Redirect "/"
	const Navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(true);
	const [selectedChat, setSelectedChat] = useState("");
	const [currentUser, setCurrentUser] = useState("");

	const verifyUser = async () => {
		try {
			const response = await fetch("/dashboard");

			const result = await response.json();

			setCurrentUser(result);

			setIsLoading(false);

			if (response.status >= 400) {
				setTimeout(() => {
					toast("Plz LogIn First 😡", {
						position: "top-right",
						theme: "dark",
						autoClose: 2000
					});
				}, 3000);

				return Navigate("/");
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		verifyUser();
	}, []);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div className="container-fluid p-0">
					<div className="row landing-page-container p-0 m-0">
						<div className="col-6 col-sm-5 col-md-4 p-0">
							<ContactList
								setSelectedChat={setSelectedChat}
								currentUser={currentUser}
							/>
						</div>
						<div className="col-6 col-sm-7 col-md-8 p-0">
							<Conversation selectedChat={selectedChat} />
						</div>
					</div>
				</div>
			)}
			<ToastContainer />
		</>
	);
};

export default DashboardPage;
