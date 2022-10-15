import React from 'react';
import TestimonialComponent from './TestinomialComponent';
import classes from "./TestimonialSection.module.css";

const TestimonialSection = () => {
   return (
      <div className={classes.parent} >
         <TestimonialComponent />
         <TestimonialComponent />
         <TestimonialComponent />
      </div>
   );
}

export default TestimonialSection;
