import React, { useState } from "react";
import "./Form.css";
import P_Form from "./P_Form.js";
import M_Form from "./M_Form.js"
import F_Form from "./F_Form.js"
import UC_Form from "./UC_Form.js"
import Data from "../../MockStore/MockData.js"

const Form = (props) => {


    if (props.type.toUpperCase() === "PRODUCT") {
        return <P_Form showFormHandler={props.showFormHandler}/>

    } else if (props.type.toUpperCase() === "MODULE") {
        return <M_Form/>

    }else if (props.type.toUpperCase() === "FEATURE") {
        return <F_Form/>

    }else if(props.type.toUpperCase()==="USECASE"){
        return <UC_Form/>
    }
};

export default Form;
//export {productArr};