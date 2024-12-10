import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <span className="logo-icon">W</span>EDZ
        </a>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Venue</a>
        </li>
        <li>
          <a href="#">Dresses</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#" className="search-icon">
            <img src="https://via.placeholder.com/16x16" alt="Search" />
          </a>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
