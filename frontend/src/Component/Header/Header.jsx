import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <span> ALL CSS </span>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
