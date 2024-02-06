import "./Table.css"
import React from "react";
import RowsAndData from "./RowsAndData";

const Table = (props) => {

  const H=props.content.Heading.length;
  const MapingK=Object.keys(props.content.Maping)
 

  if(H!==MapingK.length){
    return;
  }

  return (
    <table>
      <thead>
        <tr>
            <th className="th-td">#</th>
          {props.content.Heading.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {<RowsAndData content={props.content}/>}
      </tbody>
    </table>
  );
};

export default Table;