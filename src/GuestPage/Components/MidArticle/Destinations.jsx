import React from 'react';
import ArticleShowcase from './ArticleShowcase';
import classes from './Destinations.module.css'
import room1 from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/HotelRoom1.jpg";
import room2 from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/HotelRoom2.jpg";
import room3 from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/HotelRoom3.jpg";
import room4 from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/HotelRoom4.jpg";
// import room2 from ''

const Destinations = () => {
   return (
		<div className={classes.parent}>
			<ArticleShowcase
				src={room1}
				title={"Luxury Rooms"}
				details={"Full Board · Free Cancellation"}
			/>

			<ArticleShowcase
				src={room3}
				title={"Cabanas"}
				details={"Silent · Spiritual"}
			/>

			<ArticleShowcase
				src={room2}
				title={"Family Plus"}
				details={"Day Outing · Children Park"}
			/>

			<ArticleShowcase
				src={room4}
				title={"General Rooms"}
				details={"Customizable · Upto 4 Mem"}
			/>

		</div>
	);
}

export default Destinations;
