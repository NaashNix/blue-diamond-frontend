import React from 'react';
import DetailsArticle from './DetailsArticle';
import classes from './HeaderBanner.module.css';

const HeaderBanner = () => {
   return (
		<div className={classes.parent}>
			<img
				src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/banner background.jpg")}
				alt="Header Banner"
			/>
         <DetailsArticle/>
		</div>
	);
}

export default HeaderBanner;
