import { useEffect, useState } from "react";
import "./Header.css";

const Header = (props) => {
	const [currentUser, setCurrentUser] = useState("");

	const loggedUser = async () => {
		const response = await fetch("/google");

		const result = await response.json();

		setCurrentUser(result);
	};

	useEffect(() => {
		loggedUser();
	}, []);

	return (
		<>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col header-container ">
						<img
							src={
								props.currentUser
									? props.currentUser.profilePic
									: currentUser.profilePic
							}
							alt="header-logo"
						/>
						<h6>
							{props.currentUser ? props.currentUser.name : currentUser.name}
						</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
