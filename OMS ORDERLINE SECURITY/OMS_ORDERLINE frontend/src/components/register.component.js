import React, { useState } from "react";
import AuthService from "../services/auth.service";

export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    AuthService.register(username, email, password).then(
      () => setMessage("User registered successfully"),
      () => setMessage("Registration failed")
    );
  };

  return (
    <form className="container" onSubmit={handleRegister}>
      <h3>Register</h3>

      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password"
             onChange={e => setPassword(e.target.value)} />

      <button>Register</button>
      <p className="message">{message}</p>
    </form>
  );
}
