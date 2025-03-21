import React, { useState } from "react";
import "./Css/Loginsignup.css";
import { useAuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuthContext();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup(email, password, name);
      cleanup();
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  const cleanup = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
          />
        </div>

        {/* Error Display */}
        {error && <p className="error-message">{error}</p>}

        <button className="continue-btn" type="button" onClick={handleSignup}>
          Continue
        </button>

        <p className="loginsignup-login">
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span>Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
