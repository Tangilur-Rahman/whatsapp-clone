import ContactList from "../ContactList/ContactList";
import Conversation from "../Conversation/Conversation";
import "./LandingPage.css";

const LandingPage = () => {
	return (
		<div className="container-fluid p-0">
			<div className="row landing-page-container p-0 m-0">
				<div className="col-md-4 p-0">
					<ContactList />
				</div>
				<div className="col-md-8 p-0">
					<Conversation />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
