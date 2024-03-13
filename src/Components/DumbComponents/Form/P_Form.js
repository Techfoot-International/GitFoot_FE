import React, { useState } from "react";
import "./Form.css";
import Data from "../../MockStore/MockData.js"

function P_Form(props){
    const [p_name, set_p_name] = useState("");
    const [p_description, set_p_description] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
                const response = await Data.createProduct({ p_name, p_description });
                console.log(response); 
                if(response){
                    set_p_name("");
                    set_p_description("");
                    props.showFormHandler(false,true)
                }
                
            
        } catch (error) {
            console.error("Error:", error);
        }
    };

    function handleChange(event){
        const name= event.target.name
        const value= event.target.value

        if(name==="product_name"){
            set_p_name(value)
        }else if(name==="product_description"){
            set_p_description(value)
        }   
    }


    return <form onSubmit={handleSubmit} >
    <div className="div-flex">
        <div className="flex-item">
            <h2>Product</h2>
        </div>
        <div className="flex-item">
            <label>Name</label>
            <textarea
                name="product_name"
                type="text"
                value={p_name}
                onChange={handleChange}
                maxLength={45}
                required
            />
        </div>
        <div className="flex-item">
            <label>Description</label>
            <textarea
                name="product_description"
                value={p_description}
                onChange={handleChange}
                className="description"
                maxLength={500}
                required
            />
        </div>
        <div className="flex-item">
            <input type="submit" className="submit-button" value={"Add"} />
        </div>
    </div>
</form>

}

export default P_Form;