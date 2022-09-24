import React from "react";
import classes from "./MenuBarOptions.module.css";

const MenuBarOptions = (props) => {
	

	return (
		<div className={classes.parent}>
			<a className={classes.links}>Rooms</a>
			<a className={classes.links} onClick={props.onClick}>
				Gallery
			</a>
			<a className={classes.links} onClick={props.onClick}>
				Location
			</a>
			<a className={classes.links} onClick={props.onClick}>
				Contact Us
			</a>
			<a href="" className={classes[("links", "bookNowButton")]}>
				BOOK NOW
			</a>
		</div>
	);
};

export default MenuBarOptions;
