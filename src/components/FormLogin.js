import React from "react";
import loginValidate from "./LoginValidateInfo";
import useForm from "./useForm";
import "./Form.css";

import { Link } from "react-router-dom";

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    loginValidate
  );

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <h1 className="login-topLine">LOGIN</h1>
      <div className="form-inputs">
        <label className="form-label">Username</label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div className="form-inputs">
        <label className="form-label">Password</label>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button className="form-input-btn" type="submit">
        Login
      </button>
      <span className="forgot-password">
        <Link to="/">Forgot password?</Link>
      </span>
    </form>
  );
};

export default FormLogin;
