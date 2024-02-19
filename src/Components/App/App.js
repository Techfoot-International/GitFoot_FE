import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import NavBar from "../DumbComponents/NavBar/NavBar.js";
import SideBar from "../SideBar/sideBar.js";
import Container from "../Container/Container.js"




function App() {
   return (
    <div className="App">
      <NavBar/>
      <SideBar/>
    </div>
  );
}
export default App;