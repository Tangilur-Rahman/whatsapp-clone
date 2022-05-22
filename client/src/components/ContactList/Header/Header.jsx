import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
	const [currentUser, setCurrentUser] = useState("");

	const getCurrentUser = async () => {
		const response = await fetch("/users/currentUser");

		const result = await response.json();

		setCurrentUser(result);
	};

	useEffect(() => {
		getCurrentUser();
	}, []);

	return (
		<>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col header-container ">
						<img src={currentUser.profilePic} alt="" />
						<h6>{currentUser.name}</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
