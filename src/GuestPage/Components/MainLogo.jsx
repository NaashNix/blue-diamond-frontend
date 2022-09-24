import React from "react";
import classes from "./MainLogo.module.css";

const MainLogo = () => {
	return (
		<div className={classes.parent}>
				<img
					className={classes.mainLogo}
					src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/menu-bar-logo.png")}
					alt="Main Logo"
				/>
		</div>
	);
};

export default MainLogo;
