import "./SearchBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

const SearchBox = ({ setSearchUser }) => {
	const [search, setSearch] = useState("");

	const submitHandler = async (event) => {

		try {
			const response = await fetch(`/users/users/search?search=${search}`);

			const result = await response.json();

			
      setSearchUser(result);

		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		submitHandler();
	}, [search]);

	return (
		<div className="container-fluid p-0 ">
			<div className="row">
				<div className="col search-box-container">
					{/* <form onSubmit={submitHandler}> */}
						<div className="search-box">
							<FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />

							<input
								type="search"
								name="search"
								id="search"
								placeholder="Search or start new chat "
								onChange={(event) => {
									setSearch(event.target.value);
								}}
								value={search}
								autoComplete = "off"
							/>
						</div>
					{/* </form> */}
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
