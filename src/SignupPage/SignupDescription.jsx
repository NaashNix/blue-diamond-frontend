import React from 'react';
import MainLogo from '../GuestPage/Components/MainLogo';
import classes from "./SignupDescription.module.css";
import lineArtImage from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/hotel_line_art.jpg";

const SignupDescription = () => {
   return (
		<div className={classes.parent} >
			<MainLogo className={classes.logo} />
			<span className={classes.heading}>
				Create a free account to unlock members only content and benefits
			</span>
			<span className={classes.subHeading} >
				Learn about the latest innovations and discover the best tools to
				run and grow your hotel business.
			</span>
         <img src={lineArtImage} alt="" className={classes.image} />
		</div>
	);
}

export default SignupDescription;
