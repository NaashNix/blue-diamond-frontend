import React from 'react';
import classes from "./TestimonialComponent.module.css";

const TestimonialComponent = () => {
   return (
		<div className={classes.parent}>
			<div className={classes.headingContainer}>
				<div className={classes.imageContainer}>
					<img
						src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/customer1.jpg")}
						alt={""}
					/>
				</div>
				<div className={classes.nameContainer}>
					<span className={classes.name}>Mr. John Michel</span>
					<span className={classes.address}>Colombo</span>
				</div>
			</div>
			<div className={classes.customerCommentContainer} >
				<p className={classes.customerComment}>
					"Dale Harris has been part of the Red Mist Leisure family for over
					12 years, having previously worked at our sister pub The Duke of
					Cambridge in Tilford and also our pub in Farnham, The Wheatsheaf.
					His career in the pub industry even goes back to before Red Mist
					owned The Duke of Cambridge, when he was Assistant Manager of the
					pub."G
				</p>
			</div>
		</div>
	);
}

export default TestimonialComponent;
