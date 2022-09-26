import React from "react";
import classes from "./MenuBar.module.css";
import MainLogo from './MainLogo';
import MenuOptions from "./MenuOptions";

const MenuBar = () => {
	return (
   <div className={classes.parent} >
      <MainLogo />
      <span>HOTLINE : +(94)702053777</span>
      <MenuOptions />
   </div>);
};

export default MenuBar;
