import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import Hero from "parts/Hero";
import Example from "pages/Example";
function App() {
  return (
    <div className="App">
    <Example/>
    </div>
  );
}

export default App;
