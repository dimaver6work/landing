import React from "react";
import { ReactComponent as Logo } from "./assets/logo-black.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Logo className="logo_nav" />
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>WORK</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
