import React, { useEffect, useState, useCallback } from "react";
import InputField from "./InputField";
import classes from "./LoginForm.module.css";
import jwt_decode from "jwt-decode";

const LoginForm = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const loginMainMethod = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		let username = "naashnix";

		try {
			const response = await fetch(
				`http://localhost:8080/app/api/login?username=${username}`
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const loggedData = await response.json();
			console.log(loggedData);

		} catch (error) {
			setError(error);
		}

		setIsLoading(false);

	});

	function handleCallBackResponse(response) {
		console.log("Encoded JWT ID token : " + response.credential);
		var userObject = jwt_decode(response.credential);
		console.log(userObject);
		setUser(userObject);
		document.getElementById("google-sign").hidden = true;
	}

	function handleSignOut(event) {
		setUser({});
		document.getElementById("google-sign").hidden = false;
	}

	useEffect(() => {
		/*Global Google*/
		window.google.accounts.id.initialize({
			client_id:
				"569455791412-mfj5jfk52epmc9ttc3kbibunk5deqhgb.apps.googleusercontent.com",
			callback: handleCallBackResponse,
		});

		window.google.accounts.id.renderButton(
			document.getElementById("google-sign"),
			{
				theme: "outline",
				size: "large",
			}
		);

		window.google.accounts.id.prompt();
	}, []);

	return (
		<div className={classes.parent}>
			<img
				src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/icons8-male-user-96.png")}
				alt="Male User Icon"
			/>
			<InputField id={"usernameField"} type={"text"}>
				USERNAME
			</InputField>
			<InputField id={"passwordField"} type={"password"}>
				PASSWORD
			</InputField>

			<button className={classes.loginButton}>LOGIN</button>

			<div id="google-sign" className={classes.google_sign}></div>
		</div>
	);
};

export default LoginForm;
