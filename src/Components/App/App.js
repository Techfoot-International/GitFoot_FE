import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import NavBar from "../DumbComponents/NavBar/NavBar.js";
import SideBar from "../SideBar_2/SideBar.js";


function App() {
  //localStorage.clear()
   return (
    <div className="App">
      <NavBar/>
      <SideBar/>
    </div>
  );
}
export default App;
//
//<Product_Table content={JSON.parse(localStorage.getItem("product"))}/>