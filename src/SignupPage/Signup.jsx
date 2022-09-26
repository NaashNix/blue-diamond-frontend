import React from "react";
import classes from "./Signup.module.css";
import MenuBar from "../GuestPage/Components/MenuBar";
import SignupDescription from "./SignupDescription";
import SignupForm from "./SignupForm";
import { useState } from "react";

const Signup = () => {

	const [data,setData] = useState('');

	const childToParent = (childData) => {
			console.log(childData);
			var date = new Date();
			var today = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();

			childData = {
				...childData,
				joinedDate : today,
				username : 'naashnix'
			}

			var formBody = [];
			for (var property in childData) {
				var encodedKey = encodeURIComponent(property);
				var encodedValue = encodeURIComponent(childData[property]);
				formBody.push(encodedKey + "=" + encodedValue);
			}

			formBody = formBody.join("&");

			fetch("http://localhost:8080/app/api/customer", {
				method: "POST",
				headers: {
					"Content-Type":
						"application/x-www-form-urlencoded;charset=UTF-8",
				},
				body: formBody,
			});

	}

	


	return (
		<div className={classes.content}>
			<SignupDescription />
			<SignupForm childToParent={childToParent} />
		</div>
	);
};

export default Signup;
