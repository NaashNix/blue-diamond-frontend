import React from "react";
import classes from "./MiniImageGallery.module.css";

const MiniImageGallery = () => {
	return (
		<div className={classes.parent}>
			<div className={classes.frameParent}>
				<img
					className={classes.frame}
					src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/pexels-pixabay-258154.jpg")}
					alt=""
				/>
			</div>

			<div className={classes.frameParent}>
				<img
					className={classes.frame}
					src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/HotelArea2.jpg")}
					alt=""
				/>
			</div>

			<div className={classes.frameParent}>
				<img
					className={classes.frame}
					src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/HotelArea3.jpg")}
					alt=""
				/>
			</div>
		</div>
	);
};

export default MiniImageGallery;
