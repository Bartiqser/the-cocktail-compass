import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

// Navbar component to render the navigation bar
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-blur">
      <div className="container-fluid">
        {/* Logo and brand name with link to home page */}
        <Link to="/" className="navbar-brand">
          <img src="/martini-glass-citrus-solid.svg" alt="Logo" className="d-inline-block align-text" style={{ marginRight: "15px" }}/>
          The Cocktail Explorer
        </Link>

        {/* Toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links that collapse in mobile view */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cocktails" className="nav-link">
                Search For Cocktails
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
