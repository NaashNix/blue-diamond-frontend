import React from 'react';

const DateField = (props) => {
   return (
      <React.Fragment>
         <label htmlFor={props.id}></label>
         <input type="date" id={props.id} />
      </React.Fragment>
   );
}
 
export default DateField;
