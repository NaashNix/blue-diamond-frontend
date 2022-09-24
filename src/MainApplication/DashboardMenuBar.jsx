import React from 'react';
import classes from './DashboardMenu.module.css';
import MainLogo from '../GuestPage/Components/MainLogo';
import MenuBarOptions from './MenuBarOptions';


const DashboardMenuBar = () => {


	var userData = JSON.parse(sessionStorage.userData);

   return (
		<div className={classes.parent}>
			<MainLogo />
			<span> Ayubowan! {userData.firstName} {userData.secondName} </span>
			<MenuBarOptions />
		</div>
	); 
}

export default DashboardMenuBar;
