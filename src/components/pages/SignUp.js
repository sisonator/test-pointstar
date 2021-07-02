import React, { useState } from "react";
import "../Form.css";
import FormSignup from "../FormSignUp";
import FormSuccess from "../FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img
            className="form-img"
            src="images/form-img-1.svg"
            alt="spaceship"
          />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
