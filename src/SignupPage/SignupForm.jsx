import React from 'react';
import classes from "./SignupForm.module.css";
import SignupInput from './SignupInput';
import backgroundImage from '/media/naashnix/Projects/IJSE/Advanced API/Spring Boot/Blue Diamond Web/blue-diamond/src/assets/imgs/SriLanka5.jpg'

const SignupForm = () => {
   return (
      <div className={classes.parent} >
         <img src={backgroundImage} alt="" className={classes.backgroundImage} />
         <div className={classes.form} >
            <SignupInput type="text" />
         </div>
      </div>
   );
}

export default SignupForm;
