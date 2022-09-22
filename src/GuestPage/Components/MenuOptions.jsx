import React from 'react';
import classes from './MenuOption.module.css';

const MenuOptions = (props) => {

	const loginButtonClicked = () => {
		console.log('Login Button Clicked');
	}

   return (
		<div className={classes.parent}>
			<a className={classes.links}>
				Signup
			</a>
			<a className={classes.links} onClick={props.onClick} >
				Login
			</a>
			<a href="" className={classes['links','bookNowButton']}>
				BOOK NOW
			</a>
		</div>
	);
}

export default MenuOptions;
