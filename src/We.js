import React from "react";
import first from "./assets/first.png";
import second from "./assets/second.png";
import third from "./assets/third.png";

const We = () => {
  return (
    <div className="we">
      <div className="we_text">
        <h3>
          Founded in 2011 by John Mathew Smith, Konstruct has become the number
          one construction management firm
        </h3>
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
        </span>
      </div>
      <div className="we_fotos">
        <div className="we_fotos_first">
          <span>WE PLAN</span>
          <img src={first} alt="first" />
        </div>
        <div className="we_fotos_second">
          <span>WE MANAGE</span>
          <img src={second} alt="second" />
        </div>
        <div className="we_fotos_third">
          <span>WE BUILD</span>
          <img src={third} alt="third" />
        </div>
      </div>
    </div>
  );
};

export default We;
