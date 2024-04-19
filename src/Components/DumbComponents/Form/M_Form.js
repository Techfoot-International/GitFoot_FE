import React, { useState } from "react";
import "./Form.css";
import Data from "../../MockStore/storeIn.js"
//import Data from "../../MockStore/MockData.js"
//import Data from '../../MockStore/storeInBrowser.js';

function M_Form(props){
    
    const p_id=props.p_id;

    const [m_name, set_m_name] = useState("");
    const [m_description, set_m_description] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
                const response = await Data.createModule({p_id, m_name, m_description });
                console.log(response); 
                if(response){
                    set_m_name("");
                    set_m_description("");
                    props.fetchData(true)
                }
            
        } catch (error) {
            console.error("Error:", error);
        }
    };

    function handleChange(event){
        const name= event.target.name
        const value= event.target.value

        if(name==="module_name"){
            set_m_name(value)
        }else if(name==="module_description"){
            set_m_description(value)
        }   
    }

    return <form onSubmit={handleSubmit} >
    <div className="div-flex">
        <div className="flex-item">
            <h2>Module</h2>
        </div>
        <div className="flex-item">
            <label>Name</label>
            <textarea
                name="module_name"
                type="text"
                value={m_name}
                onChange={handleChange}
                maxLength={45}
                required
            />
        </div>
        <div className="flex-item">
            <label>Description</label>
            <textarea
                name="module_description"
                value={m_description}
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

export default M_Form;