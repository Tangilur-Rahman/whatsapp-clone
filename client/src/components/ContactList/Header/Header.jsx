import "./Header.css";

const Header = ({ currentUser }) => {
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
