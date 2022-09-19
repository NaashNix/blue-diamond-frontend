import React from 'react';
import classes from './DetailsArticle.module.css';

const DetailsArticle = () => {
   return (
		<div className={classes.parent} >
			<span className={classes.mainHeading} >Experience Life Like No Other!</span>
			<span className={classes.subHeading} >
				Leave the chaos of busy cities and crowded streets behind and
				welcome to jungle.
			</span>

		</div>
	);
}

export default DetailsArticle;
