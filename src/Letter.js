import React from "react";
import "./Letter.css";

const Letter = () => {
  return (
    <div className="letter">
      <p className="letter_title">Newsletter Signup</p>
      <div className="letter_right">
        <input type="text" className="letter_input" />
        <div className="letter_button">SIGNUP</div>
      </div>
    </div>
  );
};

export default Letter;
