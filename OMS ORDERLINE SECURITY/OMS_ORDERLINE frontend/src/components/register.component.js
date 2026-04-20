import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import "../Auth.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ROLE_USER");

  const handleRegister = (e) => {
    e.preventDefault();

    AuthService.register({
      username,
      email,
      password,
      roles: [role],
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <h2>Register</h2>

        <form className="auth-form" onSubmit={handleRegister}>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select onChange={(e) => setRole(e.target.value)}>
            <option value="ROLE_USER">User</option>
            <option value="ROLE_ADMIN">Admin</option>
          </select>

          <button className="auth-btn" type="submit">
            Register
          </button>
        </form>

      </div>
    </div>
  );
}

export default Register;
