import "./Table.css"
import React from "react";

function RowsAndData(props) {
    var count =1;
    var arrTd = [];
    var arrTr = [];
    
    var Mapkeys = Object.keys(props.content.maping);
    var Mapvalues=Object.values(props.content.maping)
    var DataArr=props.content.data;

    for (let x = 0; x < DataArr.length; x++) {
        arrTd.push(<td className="th-td" key={`${x}-a`}>{count++}</td>)
        for (let k = 0; k < props.content.heading.length; k++) {
            for (let i = 0; i < props.content.heading.length; i++) {
                if(props.content.heading[k].toUpperCase()===Mapkeys[i].toUpperCase()){
                    if(DataArr[x][Mapvalues[i].toUpperCase()]!== undefined ){
                        arrTd.push(<td key={`${x}-${k}-${i}`}>{DataArr[x][Mapvalues[i].toUpperCase()]}</td>)
                        i=props.content.heading.length;
                    }else{
                        console.log("what")
                        arrTd.push(<td key={`${x}-${k}-${i}`}>{DataArr[x][Mapvalues[i].toLowerCase()]}</td>)
                        i=props.content.heading.length;
                    }
                    
                }// if
            }//for i < props.content.heading.length
        }//k < props.content.heading.length

        arrTr.push(<tr key={x}>{arrTd}</tr>)
        arrTd=[]
    }
    return arrTr;
}
    
export default RowsAndData;