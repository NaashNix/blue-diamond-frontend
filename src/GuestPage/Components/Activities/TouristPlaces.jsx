import React from 'react';
import ImageContainer from './ImageContainer';
import classes from "./TouristPlaces.module.css";
import TouristPlacesDescription from "./TouristPlacesDescription";

const TouristPlaces = () => {
	return <div className={classes.parent}>
		<TouristPlacesDescription />
		<ImageContainer />
	</div>;
};

export default TouristPlaces;
 