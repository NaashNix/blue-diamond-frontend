import React from 'react';
import classes from "./TouristPlacesDescription.module.css";   

const TouristPlacesDescription = (props) => {
   return (
		<div className={classes.parent}>
			<span className={classes.heading}>#Visit Sri Lanka</span>
			<p className={classes.subHeading}>{props.description}</p>
			<button className={classes.button} href={props.link} >VIEW MORE</button>
		</div>
	);
}

export default TouristPlacesDescription;
