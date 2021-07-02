import React, { useState } from "react";
import "../Form.css";
import FormLogin from "../FormLogin";
import { Redirect } from "react-router";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-login-container">
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <Redirect to="/" />
        )}
      </div>
    </>
  );
};

export default Login;
