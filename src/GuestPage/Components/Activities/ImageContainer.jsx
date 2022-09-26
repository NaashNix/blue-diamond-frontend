import React from 'react';
import classes from './ImageContainer.module.css';

const ImageContainer = (props) => {

   return (
		<div className={classes.parent} >
			
			<span className={classes.title}  >{props.title}</span>
			<img className={classes.image}
				src={props.source}
				alt=""
			/>
		</div>
	);
}

export default ImageContainer;
