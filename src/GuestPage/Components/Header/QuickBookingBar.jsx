import React from 'react'; 
import DateField from './DateField';
import classes from './QuickBookingBar.module.css';
import PersonInputField from './PersonInputField'

const QuickBookingBar = () => {
   return (
		<div className={classes.parent}>
			<DateField id={"checkingDate"}>CHECK-IN </DateField>
			<DateField id={"checkOutDate"}>CHECK-OUT</DateField>
			<PersonInputField id={"adultsCountField"} placeholder={"MAX 05"} >ADULTS</PersonInputField>
			<PersonInputField id={"childCountField"} placeholder={"MAX 04"} >CHILDREN</PersonInputField>

			<button className={classes.bookNowButton}>BOOK NOW</button>
		</div>
	);
}

export default QuickBookingBar;
