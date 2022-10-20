import "./App.css";
import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import We from "./We";
import Capabilities from "./Capabilities";
import Our from "./Our";
import Blocks from "./Blocks";
import City from "./City";
import Letter from "./Letter";
import Footer from "./Footer";
function App() {
  return (
    <div className="app">
      <Main />

      <div className="conteiner">
        <Navbar />
        <Our />
        <We />
        <Capabilities />
        <Blocks />
        <City />
      </div>
      <Letter />
      <Footer />
    </div>
  );
}

export default App;
