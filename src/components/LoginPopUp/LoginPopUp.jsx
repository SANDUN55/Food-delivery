import React, {useState} from "react";
import "./LoginPopUp.css";
import {assets} from "../../assets/assets";

function LoginPopUp({setShowLogin}) {
	const [currentState, setCurrentState] = useState("Sign Up");

	return (
		<div className="login-popup">
			<form className="login-popup-container">
				<div className="login-popup-title">
					<h2>{currentState}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt="Close"
						aria-label="Close"
					/>
				</div>
				<div className="login-popup-input">
					{currentState === "Sign Up" && (
						<input type="text" placeholder="Your name" required />
					)}
					<input type="email" placeholder="Your Email" required />
					<input type="password" placeholder="Password" required />

					{currentState === "Sign Up" && (
						<div className="login-popup-condition">
							<input type="checkbox" id="terms" required />
							<label htmlFor="terms">
								I agree to the terms and conditions
							</label>
						</div>
					)}

					<button type="submit">
						{currentState === "Sign Up" ? "Create Account" : "Login"}
					</button>

					<p>
						{currentState === "Login" ? (
							<>
								Create a new account?{" "}
								<span onClick={() => setCurrentState("Sign Up")}>
									Click Here
								</span>
							</>
						) : (
							<>
								Already have an account?{" "}
								<span onClick={() => setCurrentState("Login")}>
									Login Here
								</span>
							</>
						)}
					</p>
				</div>
			</form>
		</div>
	);
}

export default LoginPopUp;
