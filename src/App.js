import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  exact path="/" element={<LandingPage/>} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
