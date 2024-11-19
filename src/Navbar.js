import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">The Cocktail Compass</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cocktails">Search For Cocktails</Link>
      </div>
    </nav>
  );
};

export default Navbar;
