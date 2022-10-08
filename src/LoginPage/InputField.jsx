import React, { useRef, useImperativeHandle } from "react";
import classes from "./InputField.module.css";

const InputField = React.forwardRef((props, ref) => {
	const inputRef = useRef();
	const activate = () => {
		inputRef.current.focus();
	};

	useImperativeHandle(ref, () => {
		return {
			focus: activate,
			value: inputRef.current.value,
		};
	});


	return (
		<div className={classes.parent}>
			{/* <label htmlFor={props.id} >{props.children}</label> */}
			<input
				type={props.type}
				id={props.id}
				placeholder={props.children}
				ref={inputRef}
			/>
		</div>
	);
});

export default InputField;
