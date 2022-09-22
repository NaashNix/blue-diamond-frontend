import React from 'react';
import classes from './InputField.module.css';

const InputField = (props) => {
   return (
      <div className={classes.parent} >
         {/* <label htmlFor={props.id} >{props.children}</label> */}
         <input type={props.type} id={props.id} placeholder={props.children} />
      </div>
   );
}

export default InputField;
