import React, { useState, useEffect } from 'react';
import './Tab_AddButton.css'

function AddButton(props){
    //const [childData, setChildData] = useState(false)

    function clickHandler(){
        //setChildData(true)
        props.showFormHandler(true,false)
    }

    return <div className="flex-items">
        <button onClick={clickHandler}>+</button>
    </div>
}

export default AddButton;