import "./Table.css"
import React from "react";

function RowsAndData(props) {
    var count =1;
    var arrTd = [];
    var arrTr = [];

    const product=props.content;

    for (let i = 0; i < props.content.length; i++) {
        arrTd.push(<td className="th-td" key={`${i}-a`}>{count++}</td>);
        arrTd.push(<td className="th-td" key={`${i}-b`}>{product[i].name}</td>)
        arrTd.push(<td className="th-td" key={`${i}-c`}>{product[i].description}</td>)
        
        arrTr.push(<tr key={i}>{arrTd}</tr>)
        arrTd=[]     
    }//looping through product array
    return arrTr;
}
    
export default RowsAndData;