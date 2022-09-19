import React from 'react';
import classes from './PersonInputField.module.css';

const PersonInputField = (props) => {
   return (
      <div className={classes.parent} >
         <label className={classes.label} htmlFor={props.id}>{props.children}</label>
         <input className={classes.inputField} type="number" placeholder={props.placeholder} />
      </div>
   );
}

export default PersonInputField;
