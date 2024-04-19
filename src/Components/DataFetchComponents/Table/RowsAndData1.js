import "./Table.css"
import React from "react";
import { Link } from "react-router-dom";

function RowsAndData(props) {
    var count =1;
    var arrTd = [];
    var arrTr = [];
    //var counting=0

    const product=props.content;

    function clickRow(i){
        //props.showDetailHandler(true,false,true, {id:i, name: product[i].name, description: product[i].description})
        props.specificPro({id:i+1, name: product[i].name, description: product[i].description})
        
        localStorage.setItem('product',JSON.stringify({id:i+1, name: product[i].name, description: product[i].description}))
    }

    for (let i = 0; i < props.content.length; i++) {
        arrTd.push(<td className="th-td" key={`${i}-a`}>{count++}</td>);
        arrTd.push(<td className="th-td" key={`${i}-b`}><Link to='/Product'>{product[i].name}</Link></td>)
        arrTd.push(<td className="th-td" key={`${i}-c`}><Link to='/Product'>{product[i].description}</Link></td>)

        //counting++

        arrTr.push(<tr key={i} onClick={() => {clickRow(i)}}>{arrTd}</tr>)
        arrTd=[]     
    }//looping through product array
    return arrTr;
}
    
export default RowsAndData;