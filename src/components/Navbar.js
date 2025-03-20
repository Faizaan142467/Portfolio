import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this path is correct

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio</h1>

      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        ☰
      </div>

      <ul className={isMobile ? "nav-links mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
