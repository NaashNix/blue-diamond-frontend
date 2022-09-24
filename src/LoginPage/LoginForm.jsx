import React, { useEffect, useState, useCallback, useRef } from "react";
import InputField from "./InputField";
import classes from "./LoginForm.module.css";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
	const usernameRef = useRef();
	const passwordRef = useRef();
	const history = useHistory();
	const [user, setUser] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if(sessionStorage.getItem('availability_blue_diamond') === '1'){
			history.push('/booking');
		}
	}, []);

	const loginMainMethod = useCallback(async () => {
		const enteredData = {
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		};
		
		console.log(enteredData);
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`http://localhost:8080/app/api/login?username=${enteredData.username}&password=${enteredData.password}`
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const loggedData = await response.json();

			console.log(loggedData);

			if (loggedData.data === "user") {
				console.log("redirect");
				history.push("/booking");
			}
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
		sessionStorage.setItem('availability_blue_diamond', 1);
		const userData = {
			firstName: userObject.given_name,
			secondName: userObject.family_name,
			email : userObject.email,
			username : userObject.sub
		};
		
		sessionStorage.setItem("userData", JSON.stringify(userData));
		history.push("/booking");

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
			<InputField id={"usernameField"} type={"text"} ref={usernameRef}>
				USERNAME
			</InputField>
			<InputField id={"passwordField"} type={"password"} ref={passwordRef}>
				PASSWORD
			</InputField>

			<button onClick={loginMainMethod} className={classes.loginButton}>
				LOGIN
			</button>

			<div id="google-sign" className={classes.google_sign}></div>

			{isLoading && <p>Loading...</p>}
		</div>
	);
};

export default LoginForm;
