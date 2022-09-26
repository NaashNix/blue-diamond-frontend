import React from "react";
import classes from "./SignupInput.module.css";
import tick from '/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/icons/tick.png';
import cross from '/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/icons/cross.png';

const SignupInput = (props) => {



	return (
		<div className={classes.parent} >
      <label className={classes.label} htmlFor={props.id}>{props.label} </label>
			<input 
            className={classes.input}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
      <div className={classes.verifyingBadge} >
        { props.isValid && <img className={classes.verifyingBadgeIcon} src={tick} alt="Tick" /> }
        { !props.isValid && <img className={classes.verifyingBadgeIcon} src={cross} alt="Cross" /> }
      </div>
		</div>
	);
};

export default SignupInput;
