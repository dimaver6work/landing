import React from "react";
import "./Main.css";
import bg from "./assets/bg.png";
import { ReactComponent as Logo } from "./assets/logo.svg";

const Main = () => {
  return (
    <div>
      <div className="first_conteiner">
        <img className="bg" src={bg} alt="background" />

        <div className="top">
          <Logo className="logo_main" />
        </div>
        <div className="center">
          <h1>PARTNER WITH KONSTUCT</h1>
          <h3>An award-winning construction management firm</h3>
        </div>
        <div className="bot">
          <h3>SCROLL DOWN</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
