import React from "react";
import classes from "./Signup.module.css";
import MenuBar from "../GuestPage/Components/MenuBar";
import SignupDescription from "./SignupDescription";
import SignupForm from "./SignupForm";
import { useState } from "react";
import SignupFinalResult from "./SignupFinalResult";

const Signup = () => {
	const [signupState, setSignupState] = useState({
		status: false,
		message: false,
	});

	const childToParent = async (childData) => {
		console.log(childData);
		var date = new Date();
		var today =
			date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

		childData = {
			...childData,
			joinedDate: today,
			username: "naashnix",
		};

		var formBody = [];
		for (var property in childData) {
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(childData[property]);
			formBody.push(encodedKey + "=" + encodedValue);
		}

		formBody = formBody.join("&");

		/* 	try{
			const response = await fetch("http://localhost:8080/app/api/customer", {
				method: "POST",
				headers: {
					"Content-Type":
						"application/x-www-form-urlencoded;charset=UTF-8",
				},
				body: formBody,
			});

			if(true){
				setSignupState({
					status : true,
					message : true
				});
			}

		}catch (error) {
			console.log(error);
		}
 */
		if (true) {
			setSignupState({
				status: true,
				message: true,
			});
		}
	};

	return (
		<div className={classes.content}>
			{!signupState.status && <SignupDescription />}
			{!signupState.status && <SignupForm childToParent={childToParent} />}
			{signupState.status && (
				<SignupFinalResult message={signupState.message} />
			)}
		</div>
	);
};

export default Signup;
