import React, { useState, useEffect } from 'react';
import './CreateFlexItem.css'
import Tab from './Tab.js'
import AddButton from './AddButton.js';

function CreateFlexItem(props){

    if(!props.downArrow){
        return <div className='flexBox-child'>
            <Tab tabName={props.tabName} 
                showTableHandler={props.showTableHandler} />
                
            <AddButton  showFormHandler={props.showFormHandler}/>
        </div>
    }else{
        return <div className='flexBox-child'>
            <div><button>v</button></div>
            <Tab tabName={props.tabName} 
                showTableHandler={props.showTableHandler} />
                
            <AddButton  showFormHandler={props.showFormHandler}/>
        </div>
    }
    
}

export default CreateFlexItem;