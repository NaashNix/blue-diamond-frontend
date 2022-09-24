import React from 'react';
import classes from './DashboardMenu.module.css';
import MainLogo from '../GuestPage/Components/MainLogo';
import MenuBarOptions from './MenuBarOptions';


const DashboardMenuBar = () => {

	const userData = JSON.parse(sessionStorage.userData_blue_diamond);



   return (
		<div className={classes.parent}>
			<MainLogo />
			<span>{userData.firstName}</span>
			<MenuBarOptions />
		</div>
	); 
}

export default DashboardMenuBar;
