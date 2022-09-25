import React from 'react';
import classes from './ImageContainer.module.css';

const ImageContainer = (props) => {
   return (
		<div className={classes.parent} >
			<span className={classes.title} >Pinnawala Elephants</span>
			<img className={classes.image}
				src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/SriLanka1.jpg")}
				alt=""
			/>
		</div>
	);
}

export default ImageContainer;
