import React from "react";
import { FaCompactDisc } from "react-icons/fa";

const Navbar = () => (
  <div className="navbar">
    <div className="first-section">
      <div className="logo">
        <FaCompactDisc />
        <h2>rsound</h2>
      </div>
      <ul>
        <li>
          <a href="/premium">Premium</a>
        </li>
        <li>
          <a href="/help">Help</a>
        </li>
        <li>
          <a href="/download">Download</a>
        </li>
      </ul>
    </div>
    <div className="second-section">
      <ul>
        <li>
          <a href="/login-in">Login in</a>
        </li>{" "}
        <li>
          <a href="/sign-up">Sign up</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
