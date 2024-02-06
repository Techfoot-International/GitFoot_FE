import "./Table.css"
import React from "react";

function RowsAndData(props) {
    var count =1;
    var arrTd = [];
    var arrTr = [];
    
    var Mapkeys = Object.keys(props.content.Maping);
    var Mapvalues=Object.values(props.content.Maping)
    var DataArr=props.content.Data;

    for (let x = 0; x < DataArr.length; x++) {
        arrTd.push(<td className="th-td" key={`${x}-a`}>{count++}</td>)
        for (let k = 0; k < props.content.Heading.length; k++) {
            for (let i = 0; i < props.content.Heading.length; i++) {
                if(props.content.Heading[k].toUpperCase()===Mapkeys[i].toUpperCase()){
                    if(DataArr[x][Mapvalues[i].toUpperCase()]!== undefined ){
                        arrTd.push(<td key={`${x}-${k}-${i}`}>{DataArr[x][Mapvalues[i].toUpperCase()]}</td>)
                        i=props.content.Heading.length;
                    }else{
                        console.log("what")
                        arrTd.push(<td key={`${x}-${k}-${i}`}>{DataArr[x][Mapvalues[i].toLowerCase()]}</td>)
                        i=props.content.Heading.length;
                    }
                    
                }// if
            }//for i < props.content.Heading.length
        }//k < props.content.Heading.length

        arrTr.push(<tr key={x}>{arrTd}</tr>)
        arrTd=[]
    }
    return arrTr;
}
    
export default RowsAndData;