import "./Header.css";

const Header = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col header-container ">
						<img src="/assets/profile/defaultProfile.png" alt="header-logo" />
						<h6>Tangilur Rahman Tangil</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
