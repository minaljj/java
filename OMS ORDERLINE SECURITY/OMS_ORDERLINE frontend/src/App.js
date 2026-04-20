import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import Home from "./components/Home";
import Profile from "./components/profile.component";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import Register from "./components/register.component";
import authService from "./services/auth.service";
import "./App.css";
import "./Auth.css";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) setCurrentUser(user);
  }, []);

  const logout = () => {
    authService.logout();
    window.location.href = "/login";
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}

        {currentUser ? (
          <>
            <Link to="/profile">Profile</Link>{" | "}
            <Link to="/order">Create Order</Link>{" | "}
            <Link to="/orders">Order List</Link>{" | "}
            <a href="/login" onClick={logout}>Logout</a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>{" | "}
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;