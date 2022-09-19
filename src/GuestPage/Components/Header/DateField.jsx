import React from 'react';
import classes from './DateField.module.css';

const DateField = (props) => {
   return (
		<div className={classes.parent} >
			<label className={classes.label} htmlFor={props.id}>
				{props.children}
			</label>
			<input className={classes.dateField} type="date" id={props.id} />
		</div>
	);
}
 
export default DateField;
