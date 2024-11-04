import React, { useState, useEffect } from 'react';
import './Tab_AddButton.css'

function AddButton(props){

    function clickMe(){
        props.tracking_id_func(props.tracking_id)
        console.log("i'm the error")
        //console.log(props.tracking_id)
    }

    if(props.type==="add_p"){
        return <div className="flex-items">
        <button onClick={clickMe}>+</button>
        </div>
    }//this is the button for adding product
    else if(props.type==="add_m"){
        return <div className="flex-items">
        <button onClick={clickMe}>+</button>
        </div>
    }// this is the button for adding module
    else if(props.type==="add_f"){
        return <div className="flex-items">
        <button onClick={clickMe}>+</button>
        </div>
    }// this is the button for adding feature
    else if(props.type==="add_uc"){
        return <div className="flex-items">
        <button onClick={clickMe}>+</button>
        </div>
    }// this is the button for adding useCase
}

function ArrowButton(props){

    function showAndHide_m(){
        //props.toggleVisibility_m(true)
    }

    function showAndHide_f(){
        //props.toggleVisibility_f(true)
    }

    function showAndHide_uc(){
        //props.toggleVisibility_uc(true)
    }

    if(props.type==="show_p"){
        return <div><button>v</button></div>
    }//this the button for hiding product
    else if(props.type==="show_m"){
        return <div onClick={showAndHide_m}><button>v</button></div>
    }// this the button for hiding module
    else if(props.type==="show_f"){
        return <div onClick={showAndHide_f}><button>v</button></div>
    }// this the button for hiding useCase
    else if(props.type==="show_uc"){
        return <div onClick={showAndHide_uc}><button>v</button></div>
    }
}

export default AddButton;
export {ArrowButton}

//example

//<AddButton type={"add_m"} showFormHandler={props.showFormHandler}/>
//<ArrowButton type={"show_m"} visibilty={visibility} toggleVisibilty={toggleVisibility}/>