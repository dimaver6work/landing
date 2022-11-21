import React from "react";
import bg from "./assets/bg_2.png";

const City = () => {
  return (
    <div className="city">
      <img className="city_bg" src={bg} alt="background" />

      <div className="city_center">
        <h1 className="city_title">Want to build something amazing?</h1>
        <div className="city_button">GET IN TOUCH</div>
      </div>
    </div>
  );
};

export default City;
