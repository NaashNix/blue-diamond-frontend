import React from 'react';
import classes from "./TouristPlacesDescription.module.css";

const TouristPlacesDescription = () => {
   return (
		<div className={classes.parent} >
			<span className={classes.heading} >#Visit Sri Lanka</span>
			<p className={classes.subHeading} >
				Pinnawala Elephant Orphanage, is an orphanage, nursery and captive
				breeding ground for wild Asian elephants located at Pinnawala
				village, 13 km northeast of Kegalle town in Sabaragamuwa Province of
				Sri Lanka.
			</p>
         <button className={classes.button} >VIEW MORE</button>
		</div>
	);
}

export default TouristPlacesDescription;
