import React, { useState } from "react";
import "./Form.css";
import P_Form from "./P_Form.js";
import M_Form from "./M_Form.js"
import F_Form from "./F_Form.js"
import UC_Form from "./UC_Form.js"
//import Data from "../../MockStore/MockData.js"

const Form = (props) => {


    if (props.type.toUpperCase() === "PRODUCT") {
        return <P_Form  
                        fetchData={props.fetchData}/>

    }// this returns form for adding product 
    else if (props.type.toUpperCase() === "MODULE") {
        return <M_Form  
                        p_id={props.tracking_id}
                        fetchData={props.fetchData}/>

    }// this returns form for adding module
    else if (props.type.toUpperCase() === "FEATURE") {
        return <F_Form  
                        p_id={props.tracking_id.p_id}
                        m_id={props.tracking_id.m_id}
                        fetchData={props.fetchData}/>

    }// this returns form for adding feature
    else if(props.type.toUpperCase()==="USECASE"){
        return <UC_Form 
                        p_id={props.tracking_id.p_id}
                        m_id={props.tracking_id.m_id}
                        f_id={props.tracking_id.f_id}
                        fetchData={props.fetchData}/>
                        
    }// this returns form for adding useCase
};

export default Form;