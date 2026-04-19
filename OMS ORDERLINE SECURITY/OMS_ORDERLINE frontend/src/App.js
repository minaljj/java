import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import Home from "./components/home.component";
import AuthService from "./services/auth.service";

export default function App() {
  const user = AuthService.getCurrentUser();

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>

        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <a href="/login" onClick={() => AuthService.logout()}>Logout</a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}