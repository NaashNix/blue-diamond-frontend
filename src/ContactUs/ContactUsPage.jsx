import React from "react";
import DashboardMenuBar from "../MainApplication/DashboardMenuBar";
import classes from "./ContactUsPage.module.css";

const ContactUsPage = () => {
	return (
		<div className={classes.mainParent}>
			<DashboardMenuBar />
			<div className={classes.backgroundParent}>
				<img
					src={require("/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/contact-us-background.jpg")}
					alt=""
				/>
				<div className={classes.backgroundTextContainer}>
					<span className={classes.mainHeading}>Contact Us</span>
					<p className={classes.description}>
						Are you planning to stay with us? Get in touch via phone or
						email to make your reservation today! Stay connected with us
						to find out the latest buzz and special offers at The Blue
						Diamond.
					</p>
				</div>
			</div>
			<div className={classes.formParent} >
            <span className={classes.formTitle} >Send Message</span>
            <div className={classes.ciParent} >
               <span className={classes.ciTitle} >Contact Information</span>
            </div>
         </div>
		</div>
	);
};

export default ContactUsPage;
