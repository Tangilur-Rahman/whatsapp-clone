import "./WriteBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFaceGrinHearts} from "@fortawesome/free-regular-svg-icons";

const WriteBox = () => {
	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<div className="container-fluid p-0 ">
			<div className="row m-0">
				<div className="col write-box-container">
					<form onSubmit={submitHandler}>
						<div className="write-box">
							<FontAwesomeIcon icon={faFaceGrinHearts} className="icon" />

							<input
								type="text"
								name="Write"
								id="Write"
								placeholder="Type a message... "
							/>
						</div>

						<button className="btn btn-success" type="submit">Send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default WriteBox;
