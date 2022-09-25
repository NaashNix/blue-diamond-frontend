import React from 'react';
import classes from "./FooterImage.module.css";

const FooterImage = () => {
   return (
		<div className={classes.parent} >
			<img className={classes.image}
				src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/webFooter.jpg")}
				alt=""
			/>
		</div>
	);
}

export default FooterImage;
