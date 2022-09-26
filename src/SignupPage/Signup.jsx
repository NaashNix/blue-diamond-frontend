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
	}



	return (
		<div className={classes.content}>
			<SignupDescription />
			<SignupForm childToParent={childToParent} />
		</div>
	);
};

export default Signup;
