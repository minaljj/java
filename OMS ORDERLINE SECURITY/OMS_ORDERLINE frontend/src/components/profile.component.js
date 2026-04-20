import React from "react";
import AuthService from "../services/auth.service";

export default function Profile() {
  const user = AuthService.getCurrentUser();

  return (
    <div className="profile">
      <h3>User Profile</h3>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Roles:</b> {user.roles.join(", ")}</p>
    </div>
  );
}