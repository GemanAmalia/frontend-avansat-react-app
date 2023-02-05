import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const history = useNavigate();
  
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

  return (
    <div style={{ backgroundColor: "#f1f4f9", color: "#f1f4f9" }}>
      <nav className="navbar">
        <div className="navbar-links">
          <ul className="navbar-ul">
            <li>
              <CustomLink to="/Home" id="home-tab">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/Therapists" id="therapists-tab">Therapists</CustomLink>
            </li>
            <li>
              <CustomLink to="/Profile" id="profile-tab">Profile</CustomLink>
            </li>
          </ul>
        </div>
        <button id="logout-button" className="logout-button">Logout</button>

      </nav>
    </div>
  );
}