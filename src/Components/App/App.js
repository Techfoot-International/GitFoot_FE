import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import NavBar from "../DumbComponents/NavBar/NavBar.js";
import Form from "../DumbComponents/Form/Form.js";
import SideBar from "../SideBar/SideBar.js";
//import Container from "../Container/Container.js"
import Product_Table from "../DataFetchComponents/Table/Product_Table.js"
//import Di from "../MockStore/storeInBrowser.js"


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