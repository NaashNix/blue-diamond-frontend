import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./MenuOption.module.css";

const MenuOptions = () => {
	

	const history = useHistory();

	const signupHandler = () => {
		history.push('/signup');
	}

	const loginHandler = () => {
		history.push('/login')
	};


	return (
		<div className={classes.parent}>
			<a className={classes.links} onClick={signupHandler}>
				Signup
			</a>
			<a className={classes.links} onClick={loginHandler}>
				Login
			</a>
			<a href="" className={classes[("links", "bookNowButton")]}>
				BOOK NOW
			</a>
		</div>
	);
};

export default MenuOptions;
