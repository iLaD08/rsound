import React from "react";
import { Link } from "react-router-dom";
import { FaCompactDisc } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="first-section">
        <div className="logo" onClick={() => (window.location.href = "/home")}>
          <FaCompactDisc />
          <h2>rsound</h2>
        </div>
        <ul>
          <li>
            <Link to="/premium">Premium</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/download">Download</Link>
          </li>
        </ul>
      </div>
      <div className="second-section">
        <ul>
          <li>
            <Link to="/login-in">Login in</Link>
          </li>{" "}
          <li>
            <Link to="/sign-up">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
