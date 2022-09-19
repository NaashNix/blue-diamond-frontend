import React from 'react';
import classes from './MenuOption.module.css';

const MenuOptions = () => {
   return (
		<div className={classes.parent}>
			<a href="" className={classes.links}>
				Signup
			</a>
			<a href="" className={classes.links}>
				Login
			</a>
			<a href="" className={classes['links','bookNowButton']}>
				BOOK NOW
			</a>
		</div>
	);
}

export default MenuOptions;
