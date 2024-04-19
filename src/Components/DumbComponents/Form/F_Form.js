import React, { useState } from "react";
import "./Form.css";
import Data from "../../MockStore/MockData.js"
//import Data from '../../MockStore/storeInBrowser.js';

function F_Form(props){

    const p_id=props.p_id;
    const m_id=props.m_id;

    const [f_name, set_f_name] = useState("");
    const [f_description, set_f_description] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const response = await Data.createFeature({p_id, m_id, f_name, f_description });
                console.log(response); 

                if(response){
                    set_f_name("");
                    set_f_description("");

                    props.fetchData(true)
                }    

        } catch (error) {
            console.error("Error:", error);
        }
    };

    function handleChange(event){
        const name= event.target.name
        const value= event.target.value

        if(name==="feature_name"){
            set_f_name(value)
        }else if(name==="feature_description"){
            set_f_description(value)
        }   
    }

    return <form onSubmit={handleSubmit} >
    <div className="div-flex">
        <div className="flex-item">
            <h2>Feature</h2>
        </div>
        <div className="flex-item">
            <label>Name</label>
            <textarea
                name="feature_name"
                type="text"
                value={f_name}
                onChange={handleChange}
                maxLength={45}
                required
            />
        </div>
        <div className="flex-item">
            <label>Description</label>
            <textarea
                name="feature_description"
                value={f_description}
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

export default F_Form;