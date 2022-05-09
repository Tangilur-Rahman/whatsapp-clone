import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AccountPage.css";

const AccountPage = () => {
	// navigate
	const Navigate = useNavigate();

	//  for image
	const [profile, setProfile] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// show/hide password
	const [eye, setEye] = useState(true);
	const eyeHandler = (event) => {
		event.preventDefault();
		setEye(!eye);
	};

	// signup part
	const [signupData, setSignupData] = useState({
		name: "",
		email: "",
		password: "",
		c_password: ""
	});

	const signupHandler = (input) => {
		setSignupData({ ...signupData, [input.target.name]: input.target.value });
	};

	const signupClickHandler = async (event) => {
		event.preventDefault();

		let profileUrl;

		// upload image on cloudinary
		if (
			profile.type === "image/jpeg" ||
			profile.type === "image/png" ||
			profile.type === "image/jpg"
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
				toast("Server Error! Try Again Latter 🙏", {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
			}
		} else {
			const { name, email, password, c_password } = signupData;
			if (name && email && password && c_password) {
				toast("create account without profile pic 📷", {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
			}
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
					autoClose: 2000,
					theme: "dark"
				});
				setTimeout(() => {
					return Navigate("/dashboard");
				}, 3000);
			} else {
				toast(result.error, {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
			}
		} catch (error) {
			toast("Server Error! Try Again Latter 🙏", {
				position: "top-right",
				autoClose: 2000,
				theme: "dark"
			});
		}
	};

	// login part
	const [loginData, setLoginData] = useState({
		email: "",
		password: ""
	});

	const loginHandler = (input) => {
		setLoginData({ ...loginData, [input.target.name]: input.target.value });
	};

	const loginClickHandler = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch("/login", {
				method: "POST",
				body: JSON.stringify({ ...loginData }),
				headers: { "Content-Type": "application/json" }
			});

			const result = await response.json();

			if (response.status === 200) {
				toast(result.message, {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
				setTimeout(() => {
					return Navigate("/dashboard");
				}, 3000);
			} else {
				toast(result.error, {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
			}
		} catch (error) {
			toast("Server Error! Try Again Latter 🙏", {
				position: "top-right",
				autoClose: 2000,
				theme: "dark"
			});
		}
	};

	// for guest user
	const guestHandler = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch("/login", {
				method: "POST",
				body: JSON.stringify({
					email: "guest@gmail.com",
					password: "guest123"
				}),
				headers: { "Content-Type": "application/json" }
			});

			const result = await response.json();

			if (response.status === 200) {
				toast(result.message, {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
				setTimeout(() => {
					return Navigate("/dashboard");
				}, 3000);
			} else {
				toast(result.error, {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
			}
		} catch (error) {
			toast("Server Error! Try Again Latter 🙏", {
				position: "top-right",
				autoClose: 2000,
				theme: "dark"
			});
		}
	};

	// login with google
	const responseGoogle = async (responseData) => {
		const { name, email, imageUrl } = responseData.profileObj;

		try {
			const response = await fetch("/google", {
				method: "POST",
				body: JSON.stringify({ name, email, imageUrl }),
				headers: { "Content-type": "application/json" }
			});

			const result = await response.json();

			if (response.status === 200) {
				toast(result.message, {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
				setTimeout(() => {
					return Navigate("/dashboard");
				}, 3000);
			} else {
				toast(result.error, {
					position: "top-right",
					autoClose: 2000,
					theme: "dark"
				});
			}
		} catch (error) {
			toast("Bad response from Google, Try Another way😏", {
				position: "top-right",
				autoClose: 2000,
				theme: "dark"
			});
		}
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
							<button onClick={loginClickHandler}>Login</button>

							<button id="btn2" onClick={guestHandler}>
								As A Guest
							</button>
						</form>
						<div id="google-btn">
							<GoogleLogin
								clientId="146115194589-1mnrksqbave9cqjk556453mlvd2680ei.apps.googleusercontent.com"
								buttonText="Login With Google"
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={"single_host_origin"}
							/>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default AccountPage;
