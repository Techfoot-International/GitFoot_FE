import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from '../DumbComponents/Settings/Logo.js';
import Table from '../DataFetchComponents/Table/Product_Table.js'
import Form from '../DumbComponents/Form/Form.js';
//import DetailBox from "../DataFetchComponents/Detail/DetailBox.js"
import "./SideBar.css"
import SideBar_Tab from './SideBar_Tab.js';
import NavBar from "../DumbComponents/NavBar/NavBar.js";
import All_Tabs from './All_Tabs.js'
import Data from '../MockStore/storeIn.js';
import DetailBox from '../DataFetchComponents/Detail/DetailBox.js';
//import Data from '../MockStore/MockData.js';
//import Data from '../MockStore/storeInBrowser.js';


function SideBar(){

    const [num_of_Products, set_num_of_Products] = useState(0)
    const [AllProducts, setAllProducts] = useState(null)
    const [is_it_true, set_is_it_true] = useState(true)

    const [specificPro, setSpecificPro]= useState(null)
    const [identity, setIdentity]=useState(null)


    function Tracking_ID(id){
        setIdentity(id)
    }

    function SpecificPro(product){
        setSpecificPro(product)
    }

    function fetchData_func(val){
        set_is_it_true(val)
    }

    useEffect(() => {
        if(true){
            async function fetchData(){
                try{
                    setAllProducts((await Data.getAllProducts()).product)
                }
                catch(error){
                    console.error(error)
                }
            }
            fetchData()//calling returnData()
        }
        if (AllProducts !== null) {
            set_num_of_Products(AllProducts.length)
        }

    },[])
    



    return (
    <Router>
    <div className='grid-two-col'>
        <div className='grid-items item1'>
    
                <NavBar/>
            <div id='sideBar'>
                <div className='flexBox'>
                    <Logo/>
                    <SideBar_Tab key={"first_tab"}
                                 tabName={"Products"}
                                 tabType={"all_products"}
                                 tracking_id={num_of_Products}
                                 tracking_id_func={Tracking_ID}/>
                    <Routes>
                        
                         {specificPro ? <Route exact path='/Product' element={<All_Tabs key={"I'mAllTabs"}
                                                                                        product_id={specificPro.id}
                                                                                        product_name={specificPro.name}
                                                                                        tracking_id_func={Tracking_ID}/>}/> : <Route path='/Product' element={<Navigate to="/" />} />}
                    </Routes>

                </div>
                
            </div>
        </div>
        <div className='grid-items item2'>
            <Routes>
                <Route exact path='/'/>
                <Route exact path="/Products" element={<Table content={AllProducts} specificPro={SpecificPro}/>}/>
                <Route path="/add_product" element={<Form type={"product"} fetchData={fetchData_func}/>}/>
                <Route path="/add_module" element={<Form type={"module"} tracking_id={identity} fetchData={fetchData_func}/>}/>
                <Route path="/add_feature" element={<Form type={"feature"} tracking_id={identity} fetchData={fetchData_func}/>}/>
                <Route path="/add_useCase" element={<Form type={"useCase"} tracking_id={identity} fetchData={fetchData_func}/>}/>
                {specificPro ? (
        <Route path="/Product" element={<DetailBox detail={SpecificPro} />} />
    ) : (
        <Route path="/Product" element={<Navigate to="/" />} />
    )}
            </Routes>  
        </div>
    </div>
    </Router>
            )//return
}

export default SideBar;