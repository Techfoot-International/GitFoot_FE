import React, { useState, useEffect } from 'react';
import './Tab_AddButton.css'

function Tab(props){

    function clickHandler1(){
        props.showTableHandler(true,false)
    }

    return <div className="flex-items">
        <p onClick={clickHandler1}>{props.tabName}</p>
    </div>
}

export default Tab;