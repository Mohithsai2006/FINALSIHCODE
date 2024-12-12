import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Jal Shakti</div>
      <ul className="navbar-links">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/map">Map</Link>
        </li>
        <li className="nav-item">
          <Link to="/predictions">Predictions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
