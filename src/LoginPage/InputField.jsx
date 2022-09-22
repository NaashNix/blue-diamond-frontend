import React from 'react';
import classes from './InputField.module.css';

const InputField = (props) => {
   return (
      <div>
         <label htmlFor={props.id} >{props.children}</label>
         <input type={props.type} id={props.id} />
      </div>
   );
}

export default InputField;
