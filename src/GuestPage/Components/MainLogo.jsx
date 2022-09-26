import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./MainLogo.module.css";

const MainLogo = (props) => {

	const history = useHistory();

	const logoHandler = () =>{
		history.push('/');
	}

	return (
		<div
			className={` ${
				props.className != null ? props.className : classes.parent
			} `}
		>
			<img
				onClick={logoHandler}
				className={classes.mainLogo}
				src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/menu-bar-logo.png")}
				alt="Main Logo"
			/>
		</div>
	);
};

export default MainLogo;
