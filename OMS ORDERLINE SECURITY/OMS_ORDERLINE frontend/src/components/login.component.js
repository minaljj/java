import React, { useState } from "react";
import AuthService from "../services/auth.service";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(
      () => {
        window.location.href = "/profile";
      },
      () => {
        setMessage("Invalid username or password");
      }
    );
  };

  return (
    <form className="container" onSubmit={handleLogin}>
      <h3>Login</h3>

      <input
        type="text"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button>Login</button>
      <p className="message">{message}</p>
    </form>
  );
}
