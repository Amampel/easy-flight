import "./App.css";
import React from "react";
import Home from "./views/Home";
import LoginComponent from "./views/Login-Component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<LoginComponent />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
