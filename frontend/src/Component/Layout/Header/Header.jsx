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
        {/* <li>
          <div className="toggle-switch">
            <label className="labsty">
              <input className="togsty" type="checkbox" />
              <span className="slider"></span>
            </label>
            <a
              className="ank"
              href="https://dribbble.com/shots/14199649-Dark-Light-Mode-Toggle-Switch-Pattern-A11y"
            ></a>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;
