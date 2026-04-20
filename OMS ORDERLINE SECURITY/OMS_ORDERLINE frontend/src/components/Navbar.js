<nav className="navbar navbar-expand navbar-dark bg-dark">
  <Link to="/" className="navbar-brand">OMS</Link>

  <div className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link to="/home" className="nav-link">Home</Link>
    </li>

    {currentUser && (
      <li className="nav-item">
        <Link to="/order" className="nav-link">Order</Link>
      </li>
    )}
  </div>

  {currentUser ? (
    <div className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/profile" className="nav-link">Profile</Link>
      </li>
      <li className="nav-item">
        <a href="/login" className="nav-link" onClick={logOut}>
          Logout
        </a>
      </li>
    </div>
  ) : (
    <div className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">Register</Link>
      </li>
    </div>
  )}
</nav>
