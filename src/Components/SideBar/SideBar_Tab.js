import React, { useState, useEffect } from 'react';
import './SideBar_Tab.css'
import Tab from './Tab.js'
import AddButton,{ArrowButton} from './AddButton.js';

function SideBar_Tab(props){
    if(props.tab_type==="all_products"){
        
        return <div className='flexBox-child solid-line'>
            <Tab type={props.tab_type} tabName={props.tabName} 
                showTableHandler={props.showTableHandler} />
                
            <AddButton  type={"add_p"} showFormHandler={props.showFormHandler}/>
        </div>
    
    }// this returns the very first tab named "Products"
    else if(props.tab_type==="one_product"){
        
        return <div className='flexBox-child dashed-line'>

            <div className='arrowButton-tab'>
            <ArrowButton type={"show_m"} toggleVisibility_m={props.toggleVisibility_m}/>
            <Tab type={props.tab_type} tabName={props.tabName}
                showTableHandler={props.showTableHandler} />
            </div>

            <AddButton type={"add_m"} showFormHandler={props.showFormHandler}/>
        </div>
    
    }// this returns the second tab with the name of the product that you clicked in products table
    else if(props.tab_type==="module"){
        return <div className='flexBox-child'>

            <div className='arrowButton-tab'>
            <ArrowButton type={"show_f"} toggleVisibility_f={props.toggleVisibility_f}/>
            <Tab type={props.tab_type} tabName={props.tabName} 
                showTableHandler={props.showTableHandler} />
            </div>

            <AddButton type={"add_f"} showFormHandler={props.showFormHandler}/>
        </div>
    }// this returns tab for module
    else if(props.tab_type==="feature"){
        return <div className='flexBox-child'>

            <div className='arrowButton-tab'>
            <ArrowButton type={"show_uc"} toggleVisibility_uc={props.toggleVisibility_uc}/>
            <Tab type={props.tab_type} tabName={props.tabName} 
                showTableHandler={props.showTableHandler} />
            </div>

            <AddButton type={"add_uc"} showFormHandler={props.showFormHandler}/>
            </div>
    }// this returns tab for feature
    else if(props.tab_type==="useCase"){
        return <div className='flexBox-child'>
            <Tab type={props.tab_type} tabName={props.tabName} 
                showTableHandler={props.showTableHandler} />
            </div>
    }// this returns tab for useCase
}

export default SideBar_Tab;