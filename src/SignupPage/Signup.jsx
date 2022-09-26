import React from "react";
import classes from "./Signup.module.css";
import MenuBar from "../GuestPage/Components/MenuBar";
import SignupDescription from "./SignupDescription";
import SignupForm from "./SignupForm";

const Signup = () => {
	return (
		<div className={classes.content}>
			<SignupDescription />
			<SignupForm />
		</div>
	);
};

export default Signup;
