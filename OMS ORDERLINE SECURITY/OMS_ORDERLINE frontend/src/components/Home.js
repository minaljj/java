import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

function Home() {
  const user = AuthService.getCurrentUser();

  return (
    <div>
      <h2>Home</h2>

      {user && (
        <p>
          <Link to="/order">➡ Create Order</Link>
        </p>
      )}
    </div>
  );
}

export default Home;
