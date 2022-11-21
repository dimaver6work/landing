import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer_bg">
      <div className="footer">
        <div className="colomn">
          <p>COMPANY</p>
          <Logo className="logo_footer" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
        </div>
        <div className="colomn">
          <p>LINKS</p>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="colomn">
          <ul>
            <li>FAQ</li>
            <li>TERMS</li>
            <li>CAREERS</li>
          </ul>
        </div>
        <div className="colomn">
          <ul>
            <li>BLOG</li>
            <li>PARTNERS</li>
            <li>NEWS</li>
          </ul>
        </div>
        <div className="colomn">
          <p>CONTACT US</p>
          <ul>
            <li>213 Baker Street Oriel City Kounty 7000 KNW,Kountry Name</li>
            <li> +23 994 233 4022</li>
            <li>info@konstruct.com</li>
          </ul>
        </div>
      </div>
      <div className="footer_2">
        <p>© 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
      </div>
    </div>
  );
};

export default Footer;
