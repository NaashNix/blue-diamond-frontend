import React, { useRef, useReducer, useState, useEffect } from "react";
import classes from "./SignupForm.module.css";
import SignupInput from "./SignupInput";
import backgroundImage from "/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/SriLanka5.jpg";

const firstNameReducer = (state, action) => {
	if (action.type === "USER_INPUT") {

		return {
			value: action.val,
			isValid: action.val !== "",
		};
	}

	if (action.type === "INPUT_BLUR") {
		return {
			value: state.value,
			isValid: state.value !== "",
		};
	}

	return {
		value: "",
		isValid: false,
	};
};

const secondNameReducer = (state, action) => {
	if (action.type === "USER_INPUT") {

		return {
			value: action.val,
			isValid: action.val !== '',
		};
	}

	if (action.type === "INPUT_BLUR") {
		return {
			value: state.value,
			isValid: state.value !== '',
		};
	}

	return {
		value: "",
		isValid: false,
	};
};

const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {

		return {
			value: action.val,
			isValid: action.val.includes("@"),
		};
	}

	if (action.type === "INPUT_BLUR") {
		return {
			value: state.value,
			isValid: state.value.includes("@"),
		};
	}

	return {
		value: "",
		isValid: false,
	};
};

const nicNumberReducer = (state, action) => {

   var regex = new RegExp("^([0-9]{12})$");

	if (action.type === "USER_INPUT") {

		return {
			value: action.val,
			isValid: regex.test(action.val) ,
		};
	}

	if (action.type === "INPUT_BLUR") {
      

		return {
			value: state.value,
			isValid: regex.test(state.value),
		};
      
	}

	return {
		value: "",
		isValid: false,
	};
};

const SignupForm = ({ childToParent }) => {
	const firstNameRef = useRef();
	const secondNameRef = useRef();
	const emailRef = useRef();
	const nicNumberRef = useRef();

   const [buttonState, setButtonState] = useState(true);


	const [firstNameState, dispatchFirstName] = useReducer(firstNameReducer, {
		value: "",
		isValid: null,
	});

	const [secondNameState, dispatchSecondName] = useReducer(secondNameReducer, {
		value: "",
		isValid: null,
	});

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});

	const [nicNumberState, dispatchNicNumber] = useReducer(nicNumberReducer, {
		value: "",
		isValid: null,
	});

   useEffect(() => {
		setButtonState(
			!(firstNameState.isValid === true &&
				secondNameState.isValid === true &&
				emailState.isValid === true &&
				nicNumberState.isValid === true
      ));

      
	}, [firstNameState, secondNameState, emailState, nicNumberState]);


	const validateFirstName = () => {
		dispatchFirstName({ type: "INPUT_BLUR" });
	};

	const validateSecondName = () => {
		dispatchSecondName({ type: "INPUT_BLUR" });
	};

	const validateEmail = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validateNicNumber = () => {
		dispatchNicNumber({ type: "INPUT_BLUR" });
	};

	const firstNameChangeHandler = (event) => {
		dispatchFirstName({ type: "USER_INPUT", val: event.target.value });
	};

	const secondNameChangeHandler = (event) => {
		dispatchSecondName({ type: "USER_INPUT", val: event.target.value });
	};

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });
	};

	const nicNumberChangeHandler = (event) => {
		dispatchNicNumber({ type: "USER_INPUT", val: event.target.value });
	};

	const submitHandler = async (e) => {
      e.preventDefault();
		const enteredData = {
			firstName: firstNameRef.current.value,
			secondName: secondNameRef.current.value,
			email: emailRef.current.value,
			nicNumber: nicNumberRef.current.value,
		};

		childToParent(enteredData);
	};

	return (
		<div className={classes.parent}>
			<img
				src={backgroundImage}
				alt=""
				className={classes.backgroundImage}
			/>
			<form className={classes.form}>
				<SignupInput
					value={firstNameState.value}
					type="text"
					placeholder={"John"}
					id={"firstName"}
					label={"First Name"}
					isValid={firstNameState.isValid}
					onChange={firstNameChangeHandler}
					ref={firstNameRef}
					onBlur={validateFirstName}
				/>

				<SignupInput
					type="text"
					placeholder={"Wick"}
					id={"secondName"}
					label={"Given Name"}
					isValid={secondNameState.isValid}
					onChange={secondNameChangeHandler}
					value={secondNameState.value}
					ref={secondNameRef}
					onBlur={validateSecondName}
				/>

				<SignupInput
					type="email"
					placeholder={"sample@sample.com"}
					id={"email"}
					label={"E-mail Address"}
					isValid={emailState.isValid}
					onChange={emailChangeHandler}
					value={emailState.value}
					ref={emailRef}
					onBlur={validateEmail}
				/>

				<SignupInput
					type="text"
					placeholder={"200129100580"}
					id={"nicNumber"}
					label={"NIC Number"}
					isValid={nicNumberState.isValid}
					onChange={nicNumberChangeHandler}
					value={nicNumberState.value}
					ref={nicNumberRef}
					onBlur={validateNicNumber}
				/>

				<button onClick={submitHandler} className={classes.nextButton} disabled={buttonState} >
					Next
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
