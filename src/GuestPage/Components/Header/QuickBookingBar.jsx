import React from 'react';
import DateField from './DateField';
import classes from './QuickBookingBar.module.css';

const QuickBookingBar = () => {
   return (
      <div className={classes.parent} >
         <DateField id={"bookingDate"} />
      </div>
   );
}

export default QuickBookingBar;
