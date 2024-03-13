import React, { useState, useEffect } from 'react';
import "./SideBar.css"
import CreateFlexItem from './CreateFlexItem.js';
import Form from '../DumbComponents/Form/Form.js';
import Table from '../DataFetchComponents/Table/Product_Table.js'
import DetailBox from "../DataFetchComponents/Detail/DetailBox.js"
import MockData, {obj} from '../MockStore/MockData.js';



function SideBar(){
    
    const [showForm, setShowForm] = useState(false)
    const [showTable, setShowTable] = useState(false)
    const [showDetail, setDetail] = useState(false)


    function showTableHandler(table, others){
        setShowForm(others)
        setDetail(others)
        setShowTable(table)
    }

    function showFormHandler(form, others){
        setShowTable(others)
        setDetail(others)
        setShowForm(form)
    }

    function showDetailHandler(detail, others){
        setShowTable(others)
        setShowForm(others)
        setDetail(detail)
    }

    return <div className='grid-two-col'>
        <div className='grid-items item1'>
            <div className='mockSideBar'></div>
            <div id='sideBar'>
                <div className='flexBox'>
                    <CreateFlexItem tabName={"Product"} showFormHandler={showFormHandler} showTableHandler={showTableHandler}/>
                    {showDetail && <CreateFlexItem tabName={showDetail.name} downArrow={true}/>}
                </div>
            </div>
        </div>
        <div className='grid-items item2'>
            {showForm && <Form type={"product"} showFormHandler={showFormHandler}/>}
            {showTable && <Table content={obj.product} showDetailHandler={showDetailHandler}/>}
            {showDetail && <DetailBox detail={showDetail}/>}
        </div>
    </div>
}

export default SideBar;