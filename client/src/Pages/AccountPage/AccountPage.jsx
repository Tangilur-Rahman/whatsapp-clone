import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./AccountPage.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
	// navigate
	const Navigate = useNavigate();

	const [signupData, setSignupData] = useState({
		name: "",
		email: "",
		password: "",
		c_password: ""
	});
	const [profile, setProfile] = useState("");
	const [loginData, setLoginData] = useState({
		email: "",
		password: ""
	});
	const [eye, setEye] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	// signup part
	const signupHandler = (input) => {
		setSignupData({ ...signupData, [input.target.name]: input.target.value });
	};

	const signupClickHandler = async (event) => {
		event.preventDefault();

		let profileUrl;

		// upload image on cloudinary
		if (
			(profile.type === "image/jpeg" ||
				profile.type === "image/png" ||
				profile.type === "image/jpg") &&
			profile !== undefined
		) {
			setIsLoading(true);

			const formData = new FormData();
			formData.append("file", profile);
			formData.append("folder", "profile");
			formData.append("upload_preset", "whatsapp_clone");
			formData.append("cloud_name", "whatsapp-clone-tangil");

			try {
				const response = await fetch(
					"https://api.cloudinary.com/v1_1/whatsapp-clone-tangil/image/upload/",
					{
						method: "POST",
						body: formData
					}
				);

				const data = await response.json();
				setIsLoading(false);
				profileUrl = data.url.toString();
			} catch (error) {
				toast("Upload Your Image 📷", {
					position: "top-right",
					autoClose: 3000,
					theme: "dark"
				});
			}
		} else {
			toast("Upload Your Image 📷", {
				position: "top-right",
				autoClose: 3000,
				theme: "dark"
			});
		}

		// send data to server-side
		try {
			const res = await fetch("/signup", {
				method: "POST",
				body: JSON.stringify({
					...signupData,
					profileUrl
				}),
				headers: { "content-type": "application/json" }
			});

			const result = await res.json();

			if (res.status === 200) {
				toast(result.message, {
					position: "top-right",
					autoClose: 3000,
					theme: "dark"
				});
				setTimeout(() => {
					return Navigate("/dashboard");
				}, 4000);
			} else {
				toast(result.error, {
					position: "top-right",
					autoClose: 3000,
					theme: "dark"
				});
			}
		} catch (error) {
			toast("Server Error! Try Again Latter 🙏", {
				position: "top-right",
				autoClose: 3000,
				theme: "dark"
			});
		}
	};

	// login part
	const loginHandler = (input) => {
		setLoginData({ ...loginData, [input.target.name]: input.target.value });
	};

	const loginClickHandler = (event) => {
		event.preventDefault();
	};

	const guestHandler = (event) => {
		event.preventDefault();

		setLoginData({ email: "guest@gmail.com", password: "guest123" });
	};

	// show/hide password
	const eyeHandler = (event) => {
		event.preventDefault();
		setEye(!eye);
	};

	return (
		<>
			<div className="homepage-container">
				<div className="main">
					<input type="checkbox" id="chk" aria-hidden="true" />

					<div className="signup">
						<form>
							<label htmlFor="chk" aria-hidden="true">
								Sign Up
							</label>
							<input
								type="text"
								name="name"
								placeholder="Name :"
								required
								onChange={signupHandler}
							/>
							<input
								type="email"
								name="email"
								placeholder="Email :"
								required
								onChange={signupHandler}
							/>

							<div className="password">
								<input
									type={eye ? "password" : "text"}
									name="password"
									placeholder="Password :"
									required
									onChange={signupHandler}
									autoComplete="off"
								/>
								<button className="password-btn" onClick={eyeHandler}>
									{eye ? (
										<FontAwesomeIcon icon={faEyeSlash} />
									) : (
										<FontAwesomeIcon icon={faEye} />
									)}
								</button>
							</div>

							<div className="password">
								<input
									type={eye ? "password" : "text"}
									name="c_password"
									placeholder="Conform  Password :"
									required
									onChange={signupHandler}
									autoComplete="off"
								/>
								<button className="password-btn" onClick={eyeHandler}>
									{eye ? (
										<FontAwesomeIcon icon={faEyeSlash} />
									) : (
										<FontAwesomeIcon icon={faEye} />
									)}
								</button>
							</div>

							<input
								type="file"
								name="profile"
								filename="profile"
								id="profile"
								title="Upload Your Profile Picture"
								onChange={(event) => setProfile(event.target.files[0])}
							/>

							<button onClick={signupClickHandler}>
								{isLoading ? (
									<FontAwesomeIcon icon={faSpinner} spin />
								) : (
									"Sign Up"
								)}
							</button>
						</form>
					</div>

					<div className="login">
						<form>
							<label htmlFor="chk" aria-hidden="true">
								Log In
							</label>
							<input
								type="email"
								name="email"
								placeholder="Email :"
								required
								onChange={loginHandler}
							/>

							<div className="password">
								<input
									type={eye ? "password" : "text"}
									name="password"
									placeholder="Password :"
									required
									onChange={loginHandler}
								/>

								<button className="password-btn" onClick={eyeHandler}>
									{eye ? (
										<FontAwesomeIcon icon={faEyeSlash} />
									) : (
										<FontAwesomeIcon icon={faEye} />
									)}
								</button>
							</div>
							<button onClick={loginClickHandler}>Login</button>

							<button id="btn2" onClick={guestHandler}>
								As A Guest
							</button>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default HomePage;
