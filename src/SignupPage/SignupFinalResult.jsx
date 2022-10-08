import React from 'react';
import MenuBar from '../GuestPage/Components/MenuBar';
import tick from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/icons/tick.png";
import cross from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/icons/cross.png";
import classes from './SignupFinalResult.module.css';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const SignupFinalResult = (props) => {

	const history = useHistory();
	console.log(props.message);

   return (
		<div className={classes.parent}>
			<MenuBar />
			{props.message && (
				<div className={classes.subContainer}>
					<img className={classes.image} src={tick} alt="" />
					<span className={classes.headLine}>All Done!</span>
					<span className={classes.description}>
						Your login credentials sent to your email, Please check the
						email and login back.
					</span>
					<Button onClick={() => history.push("/login")} >Back Login</Button>
				</div>
			)}

			{props.message===false && (
				<div className={classes.errorContainer}>
					<img className={classes.image} src={cross} alt="" />
					<span className={classes.headLine}>Something Went Wrong!</span>
					<span className={classes.description}>
						Server error, Please try again in later.
					</span>
					<Button onClick={() => history.push("/")} >Back Home</Button>
				</div>
			)}
		</div>
	);
}

export default SignupFinalResult;
