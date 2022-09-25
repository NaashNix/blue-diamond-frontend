import React from 'react';
import classes from "./ArticleShowcase.module.css";

const ArticleShowcase = (props) => {
   return (
		<div className={classes.parent} >
			<div className={classes.imageParent} >
				<img className={classes.image} src={props.src} alt="" />
			</div>
			<span className={classes.heading} >{props.title}</span>
			<span className={classes.subHeading} >{props.details}</span>
		</div>
	);
}

export default ArticleShowcase;
