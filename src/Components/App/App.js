import React from "react";
import "./App.css"
import Container from "../Container/Container.js"
import Table from "../Table/Table.js"
import Form from "../Form/Form.js"
import Detail from "../Detail/Detail.js"
import NavBar from "../NavBar/NavBar.js"
import Home from "../Home/Home.js"

function App(){
  return<div className="App">
    <NavBar/>  
    <Home/>
  </div>
}

export default App;


//<Container component={<Form type={"product"}/>}/>
//<Detail detail={{name:"SpreeSuite", description: "This is a product.", code:"12", preCondition: "abc", postCondition: "efg"}}/>