import React from "react";
import "./App.css"
import NavBar from "../DumbComponents/NavBar/NavBar.js";
import SideBar from "../SideBar_2/SideBar.js";


function App() {
  //localStorage.clear()

   return (
    <div className="App"> 
      <SideBar/>
    </div>
  );
}
export default App;
//<NavBar/>
//<Product_Table content={JSON.parse(localStorage.getItem("product"))}/>