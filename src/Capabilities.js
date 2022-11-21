import React from "react";
import { ReactComponent as Line } from "./assets/line.svg";

const Capabilities = () => {
  return (
    <div className="capabilities">
      <div className="capabilities_title">
        <p>OUR CAPABILITIES</p>
        <Line className="line" />
      </div>
      <div className="capabilities_text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
      </div>
      <div className="capabilities_button">ALL SERVICES</div>
    </div>
  );
};

export default Capabilities;
