import React, { useState, useEffect } from 'react';
import "./SideBar.css"
import SideBar_Tab from './SideBar_Tab.js';
import SideBar_Tab_module from './SideBar_M_F_UC.js';
import Form from '../DumbComponents/Form/Form.js';
import Table from '../DataFetchComponents/Table/Product_Table.js'
import DetailBox from "../DataFetchComponents/Detail/DetailBox.js"
import MockData, {obj} from '../MockStore/MockData.js';
//import data, {things} from '../MockStore/storeInBrowser.js';

var Data=0;

async function returnData(){
    try{
        const obj= await MockData.getAllProducts();
        Data=obj.product
    }
    catch(error){
        console.error(error)
    }
}
returnData()//calling returnData()


function SideBar(){

    const [m_visibility, setM_visibility] = useState(false);

      
    const toggleVisibility_m = () => {
        setM_visibility(!m_visibility);
    };


    const [showForm, setShowForm] = useState(false)
    const [showTable, setShowTable] = useState(false)
    const [showProduct_detail, setProduct_detail] = useState(false)
    const [showModule_detail, setModule_detail] = useState(false)
    const [showFeature_detail, setFeature_detail] = useState(false)
    const [showUseCase_detail, setUseCase_detail] = useState(false)

    
    const [productValue, setProductValue] = useState(false)//this keeps value of js object value of product
    const [product_tab, setProduct_tab] = useState(false)
    const [moduleValue, setModuleValue] = useState(false)//this keeps value of js object value of a specific product's module
    const [featureValue, setFeatureValue] = useState(false)//this keeps value of js object value of a specific module's feature
    const [useCaseValue, setUseCaseValue] = useState(false)

    const [form_type, setForm_type] = useState(false)
     

    function useValues_for_detail(){
        
    }


    function showTableHandler(table, others){
        setProduct_tab(others)// will be set to false
        setProductValue(others)// will be set to false
        setShowForm(others)// will be set to false
        setModule_detail(others)
        setProduct_detail(others)// will be set to false
        setM_visibility(others)
        setShowTable(table)

    }

    function showFormHandler(form, tab, formType ,others){
        setShowTable(others)
        setProduct_detail(others)
        setModule_detail(others)
        setFeature_detail(others)
        setUseCase_detail(others)
        setForm_type(formType)
        setProduct_tab(tab)///////////////
        setShowForm(form)
    }


    function addButtonClick(whose_Button, detail, tab, val, others){
        if(whose_Button==="P_Form"){
            form_add_product_Button(detail, tab, val, others)
        }
        else if(whose_Button==="M_Form"){
            form_add_module_Button(detail, tab, val, others)
        }
        else if(whose_Button==="F_Form"){
            form_add_feature_Button(detail, tab, val, others)
        }
        else if(whose_Button==="UC_Form"){
            form_add_useCase_Button(detail, tab, val, others)
        }
    }// This function is use for add button of form


    function form_add_product_Button(detail, tab, val, others){
        setShowTable(others)
        setShowForm(others)
        setProduct_detail(detail)
        setProduct_tab(tab)
        setProductValue(val)
    }// This function is use for add button of product form

    function form_add_module_Button(detail, tab, val, others){
        setShowTable(others)
        setShowForm(others)
        setProduct_detail(others)
        setModule_detail(detail)
        setModuleValue(val)
    }//This function is use for add button of module form

    function form_add_feature_Button(detail, tab, val, others){
        setShowTable(others)
        setShowForm(others)
        setProduct_detail(others)
        setModule_detail(others)
        setFeature_detail(detail)
        setFeatureValue(val)
    }

    function form_add_useCase_Button(detail, tab, val, others){
        setShowTable(others)
        setShowForm(others)
        setProduct_detail(others)
        setModule_detail(others)
        setFeature_detail(others)
        setUseCase_detail(detail)
        setUseCaseValue(val)
    }

    function showDetailHandler(detail, others, tab, val){
        setShowTable(others)// will be set to false
        setShowForm(others)// will be set to false
        setProduct_detail(detail)// will be set to true
        setProduct_tab(tab)// will be set to true
        setProductValue(val)
    }

    return <div className='grid-two-col'>
        <div className='grid-items item1'>
            <div className='mockSideBar'></div>
            <div id='sideBar'>
                <div className='flexBox'>
                    <SideBar_Tab tabName={"Product"}
                                    showFormHandler={showFormHandler}
                                    showTableHandler={showTableHandler}
                                    tab_type={"all_products"}/>

                    {product_tab && <SideBar_Tab    tabName={productValue.name}
                                                    showFormHandler={showFormHandler}
                                                    tab_type={"one_product"}
                                                    toggleVisibility_m={toggleVisibility_m}/>}

                    {m_visibility && product_tab && <SideBar_Tab_module showFormHandler={showFormHandler}
                                                                        product={Data[productValue.id]}/>}
                </div>
            </div>
        </div>
        <div className='grid-items item2'>
            {showForm && <Form type={form_type} addButtonClick={addButtonClick} p_id={productValue.id}/>}
            {showTable && <Table content={Data} showDetailHandler={showDetailHandler}/>}
            {showProduct_detail ? (<DetailBox detail={productValue}/>) : (showModule_detail ? <DetailBox detail={moduleValue}/> :(showFeature_detail ? <DetailBox detail={featureValue}/> :(showUseCase_detail && <DetailBox detail={useCaseValue}/>)))}
        </div>
    </div>
}

export default SideBar;
//obj.product