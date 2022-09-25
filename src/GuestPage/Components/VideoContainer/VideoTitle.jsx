import React from 'react';
import classes from './VideoTitle.module.css';
import lineArt from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/art.png";

const VideoTitle = () => {
   return (
		<div className={classes.parent}>
			<span className={classes.heading} >Unwind at your pace.</span>
         <div></div>
			<span className={classes.subHeading} >
				No matter where you choose to stay, we make sure you enjoy every
				minute of it. Be it the ocean, the forest or even the city, you’ll
				be able to soak it all in, with your feet up, hands down!
			</span>
         <img className={classes.lineArt} src={lineArt} alt="" />
		</div>
	);
}

export default VideoTitle;
