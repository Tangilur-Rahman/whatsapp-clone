import "./Header.css";

const Header = ({ selectedChat }) => {
	return (
		<>
			<div className="container-fluid p-0 ">
				<div className="row m-0">
					<div className="col conversation-header ">
						<img src={selectedChat.profilePic} alt="header-logo" />
						<h6>{selectedChat.name}</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
