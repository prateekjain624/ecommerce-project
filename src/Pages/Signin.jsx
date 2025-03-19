import React from "react";
import "./Css/Signin.css";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <p className="signup-link">
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span>Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
