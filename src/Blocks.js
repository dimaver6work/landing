import React from "react";
import "./Blocks.css";
import first from "./assets/first_2.png";
import second from "./assets/second_2.png";
import third from "./assets/third_2.png";
const Blocks = () => {
  return (
    <div className="blocks">
      <div className="block1">
        <img src={first} alt="block1" />
        <p>PROJECT AND CONSTRUCTION MANAGEMENT</p>
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
        </span>
      </div>
      <div className="block2">
        <img src={second} alt="block2" />
        <p>STRUCTURE AUDIT AND MAINTENANCE</p>
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
        </span>
      </div>
      <div className="block3">
        <img src={third} alt="block3" />
        <p>FACTORY CONSTRUCTION AND MODELING</p>
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
        </span>
      </div>
    </div>
  );
};

export default Blocks;
