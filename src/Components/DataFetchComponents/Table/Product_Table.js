import "./Table.css"
import React from "react";
import RowsAndData from "./RowsAndData1.js";

const Product_Table = (props) => {

  if(props.content==null){
    return;
  }
  const p=props.content.length;
 

  if(p==0){
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

export default Product_Table;

// "Table" component takes an object

// Example
/* const obj ={product: [{name: "SpreeSuite",
                          description: "This is a billing product.",
                          module: [{name: "abc", 
                                   description: "xyz",
                                   feature:[{name: "abc",
                                             description: "xyz",
                                             useCase:[{name: "abc",
                                                       description: "xyz",
                                                       code: "123",
                                                       preCondition: "bla bla",
                                                       postConditon: "bla bla"}]all useCases array
                                          }]all features array
                                  ]}all modules array
                        }]all products are in this array */

// <Table content={obj}/>