import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './SideBar_Tab.css'
import Tab from './Tab.js'
import AddButton,{ArrowButton} from './AddButton.js';

function SideBar_Tab(props){
    if(props.tabType==="all_products"){
        
        return <div className='flexBox-child solid-line'>
            <Link to="/Products">
                <Tab type={props.tabType} tabName={props.tabName}/>
            </Link>

            <Link to="/add_product">
                <AddButton  type={"add_p"} tracking_id={props.tracking_id} tracking_id_func={props.tracking_id_func}/>
            </Link>
        </div>
    
    }// this returns the very first tab named "Products"
    else if(props.tabType==="one_product"){
        return <div className='flexBox-child dashed-line'>

            <div className='arrowButton-tab'>
            <ArrowButton type={"show_m"}/>
            <Tab type={props.tabType} tabName={props.tabName}/>
            </div>

            <Link to="/add_module">
                <AddButton type={"add_m"} tracking_id={props.tracking_id} tracking_id_func={props.tracking_id_func}/>
            </Link>
        </div>
    
    }// this returns the second tab with the name of the product that you clicked in products table
    else if(props.tabType==="module"){
        return <div className='flexBox-child'>

            <div className='arrowButton-tab'>
            <ArrowButton type={"show_f"}/>
            <Tab type={props.tabType} tabName={props.tabName}/>
            </div>

            <Link to="/add_feature">
                <AddButton type={"add_f"} tracking_id={props.tracking_id} tracking_id_func={props.tracking_id_func}/>
            </Link>
        </div>
    }// this returns tab for module
    else if(props.tabType==="feature"){
        return <div className='flexBox-child'>

            <div className='arrowButton-tab'>
            <ArrowButton type={"show_uc"}/>
            <Tab type={props.tabType} tabName={props.tabName}/>
            </div>

            <Link to="/add_useCase">
                <AddButton type={"add_uc"} tracking_id={props.tracking_id} tracking_id_func={props.tracking_id_func}/>
            </Link>
            </div>
    }// this returns tab for feature
    else if(props.tabType==="useCase"){
        return <div className='flexBox-child'>
            <Tab type={props.tabType} tabName={props.tabName}/>
            </div>
    }// this returns tab for useCase
}

export default SideBar_Tab;