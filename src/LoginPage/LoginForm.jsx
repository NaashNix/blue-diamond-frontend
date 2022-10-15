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
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		if(sessionStorage.getItem('availability_blue_diamond') === '1'){
			history.push('/booking');
		}
	}, []);

	const loginMainMethod = useCallback(async () => {

		console.log(username);

		const enteredData = {
			username: username,
			password: password
		};
		
		
		
		setIsLoading(true);
		setError(false);

		try {
			const response = await fetch(
				`http://localhost:8080/app/api/login?username=${enteredData.username}&password=${enteredData.password}`
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const result = await response.json();

			if (result.code === 202) {
				setError(false);
				settingSessionStorage(result);
				history.push('/');
				
			}else if( result.code === 601 ) {
				setError(true);
			}
		} catch (error) {
			setError(true);
		}

		setIsLoading(false);
	});


	function settingSessionStorage(result){
		sessionStorage.setItem("availability_blue_diamond", 1);
		const userData = {
			firstName: result.data.firstName,
			secondName: result.data.secondName,
			email: result.data.email,
			username: result.data.username,
		};

		sessionStorage.setItem("userData", JSON.stringify(userData));
	}

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
		history.push("/");

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

	const usernameChangeHandler  = (event) => {
		setUsername(event.target.value);
	}

	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div className={classes.parent}>
			<img
				src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/icons8-male-user-96.png")}
				alt="Male User Icon"
			/>
			<InputField id={"usernameField"} type={"text"} ref={usernameRef}  onChange={usernameChangeHandler} >
				USERNAME
			</InputField>
			<InputField id={"passwordField"} type={"password"} ref={passwordRef} onChange={passwordChangeHandler} >
				PASSWORD
			</InputField>

			<button onClick={loginMainMethod} className={classes.loginButton}>
				LOGIN
			</button>

			<div id="google-sign" className={classes.google_sign}></div>
		
			{isLoading && <p>Loading...</p>}
			{error && <p>Error occurred.</p> }
		</div>
	);
};

export default LoginForm;
