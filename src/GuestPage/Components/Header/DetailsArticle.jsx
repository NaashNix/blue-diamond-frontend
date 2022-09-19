import React from 'react';
import classes from './DetailsArticle.module.css';
import QuickBookingBar from './QuickBookingBar';

const DetailsArticle = () => {
   return (
		<div className={classes.parent}>
			<span className={classes.mainHeading}>
				Experience Life Like No Other!
			</span>
			<span className={classes.subHeading}>
				Leave the chaos of busy cities and crowded streets behind and
				welcome to jungle.
			</span>
			<QuickBookingBar />
		</div>
	);
}

export default DetailsArticle;
