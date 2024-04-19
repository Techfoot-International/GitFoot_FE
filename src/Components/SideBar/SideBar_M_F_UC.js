import React, { useState, useEffect } from 'react';
import SideBar_Tab from './SideBar_Tab.js';
import './SideBar_M_F_UC.css'


var keepTrack={ feature:[],
                useCase:[{f_id:"", uc_id:""}]
                }//keepTrack

function SideBar_Tab_module(props){
    
    var module_array=[]

    const [numberOf_f, setNumberOf_f] = useState([])

    function number_Of_feature(i){
        setNumberOf_f(previous => [...previous, i])
    }

    const [f_visibility, setF_visibility] = useState(false)
    const [specific_f, setSpecific_f] = useState(false);
    const [specific_uc, setSpecific_uc] = useState(false)

    const toggleVisibility_f = () => {
        setF_visibility(!f_visibility)
    }

    if(props.product.module){
        
        for (let i = 0; i < props.product.module.length; i++) {
            
            if(props.product.module[i].feature){
                module_array.push(<SideBar_Tab  key={`m_${i}`}
                                                tabName={props.product.module[i].name}
                                                showFormHandler={props.showFormHandler}
                                                tab_type={"module"}
                                                toggleVisibility_f={toggleVisibility_f}/>)

                module_array.push(<SideBar_Tab_feature  key={`mf_${i}`} 
                                                        module={props.product.module[i]}
                                                        showFormHandler={props.showFormHandler}
                                                        f_visibility={f_visibility}/>)
                
                
            }
            else{
                module_array.push(<SideBar_Tab  key={`m_${i}`}
                                                tabName={props.product.module[i].name}
                                                showFormHandler={props.showFormHandler}
                                                tab_type={"module"}/>)
            }
        }
    }// 1st if()

    return<div id='module_div'>{module_array}</div>
}//SideBar_Tab_module

function SideBar_Tab_feature(props){
    var feature_array=[]

    const [uc_visibility, setUC_visibility] = useState(false)
    
    const toggleVisibility_uc = () => {
        setUC_visibility(!uc_visibility)
        console.log("I'm clciked")
    }

    if(props.module.feature){
        for (let i = 0; i < props.module.feature.length; i++) {
            if(props.module.feature[i].useCase){
                feature_array.push(<SideBar_Tab key={`f_${i}`}
                                                tabName={props.module.feature[i].name}
                                                showFormHandler={props.showFormHandler}
                                                tab_type={"feature"}
                                                toggleVisibility_uc={toggleVisibility_uc}/>)
    
                feature_array.push(<SideBar_Tab_useCase key={`fuc_${i}`}
                                                        feature={props.module.feature[i]}
                                                        showFormHandler={props.showFormHandler}
                                                        uc_visibility={uc_visibility}/>)
            }
            else{
                feature_array.push(<SideBar_Tab key={`f_${i}`}
                                                tabName={props.module.feature[i].name}
                                                showFormHandler={props.showFormHandler}
                                                tab_type={"feature"}/>)
            }
        }
    }// 1st if()
    
    return <div id='feature_div'>{props.f_visibility && feature_array}</div>;
}//SideBar_Tab_feature

function SideBar_Tab_useCase(props){
    var useCase_array=[]

    for (let i = 0; i < props.feature.useCase.length; i++) {
        useCase_array.push(<SideBar_Tab key={`uc_${i}`}
                                        tabName={props.feature.useCase[i].name}
                                        showFormHandler={props.showFormHandler}
                                        tab_type={"useCase"}/>)
        
    }
    return <div id='useCase_div'>{props.uc_visibility && useCase_array}</div>
}//SideBar_Tab_useCase

export default SideBar_Tab_module;


// <SideBar_Tab_module showFormHandler={showFormHandler}  product={Data[productValue.id]}/>

// <SideBar_Tab_feature showFormHandler={showFormHandler} module={props.product.module[i]}/>

// <SideBar_Tab_useCase showFormHandler={showFormHandler} feature={props.module.feature[i]}/>