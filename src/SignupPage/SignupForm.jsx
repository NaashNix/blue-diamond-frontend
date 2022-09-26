import React from 'react';
import classes from "./SignupForm.module.css";
import SignupInput from './SignupInput';
import backgroundImage from '/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/SriLanka5.jpg'

const SignupForm = () => {
   return (
		<div className={classes.parent}>
			<img
				src={backgroundImage}
				alt=""
				className={classes.backgroundImage}
			/>
			<form className={classes.form}>
				<SignupInput
					type="text"
					placeholder={"John"}
					id={"firstName"}
					label={"First Name"}
               isValid={true}
				/>

				<SignupInput
					type="text"
					placeholder={"Wick"}
					id={"secondName"}
					label={"Given Name"}
               isValid={false}
				/>

				<SignupInput
					type="email"
					placeholder={"sample@sample.com"}
					id={"email"}
					label={"E-mail Address"}
				/>

				<SignupInput
					type="text"
					placeholder={"200129100580"}
					id={"nicNumber"}
					label={"NIC Number"}
				/>

            <a className={classes.nextButton} href="">
               Next
            </a>

			</form>
		</div>
	);
}

export default SignupForm;
