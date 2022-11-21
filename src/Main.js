import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";

const Main = () => {
  return (
    <div className="first_conteiner">
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
  );
};

export default Main;
