import "./Table.css"
import React from "react";
import RowsAndData from "./RowsAndData.js";

const Table = (props) => {

  const H=props.content.heading.length;
  const MapingK=Object.keys(props.content.maping)
 

  if(H!==MapingK.length){
    return;
  }

  return (
    <table>
      <thead>
        <tr>
            <th className="th-td">#</th>
            <th>Name</th>
            <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {<RowsAndData content={props.content}/>}
      </tbody>
    </table>
  );
};

export default Table;

// "Table" component takes an object

// Example
// const obj ={heading: ["name","description"], data: [{a:"rose", b: "She's a human."}, {a: "clara", b: "She's a human too."}], maping:{ name: "a", description: "b"} }
// <Table content={obj}/>