import React from 'react';
import classes from './Article.module.css';


const Article = (props) => {
   return (
		<div className={classes.parent}>
			<span className={classes.heading} >{props.heading}</span>
			<span className={classes.subHeading} >
				{props.description}
			</span>
         
		</div>
	);
}

export default Article;
