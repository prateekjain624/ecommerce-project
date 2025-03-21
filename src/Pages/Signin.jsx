import React, { useState } from "react";
import "./Css/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signin } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signin(email, password);
      cleanup();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const cleanup = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Error Display */}
        {error && <p className="error-message">{error}</p>}
        <button className="login-btn" type="submit" onClick={handleLogin}>
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
