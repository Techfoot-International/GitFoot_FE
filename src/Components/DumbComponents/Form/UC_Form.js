import React, { useState } from "react";
import "./Form.css";
import Data from "../../MockStore/MockData.js"
//import Data from '../../MockStore/storeInBrowser.js';

function UC_Form(props){

    const p_id=props.p_id;
    const m_id=props.m_id;
    const f_id=props.f_id

    const [uc_name, set_uc_name] = useState("");
    const [uc_description, set_uc_description] = useState("");
    const [code, setCode] = useState("");
    const [preCondition, setPreCondition] = useState("");
    const [postCondition, setPostCondition] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const response = await Data.createUseCase({p_id, m_id, f_id, uc_name, uc_description });
                
                console.log(response); 
                
                if(response){
                    set_uc_name("");
                    set_uc_description("");
                    setCode("")
                    setPreCondition("")
                    setPostCondition("")

                    props.fetchData(true)
                } 
                
            
        } catch (error) {
            console.error("Error:", error);
        }
    };

    function handleChange(event){
        const name= event.target.name
        const value= event.target.value

        if(name==="useCase_name"){
            set_uc_name(value)
        }else if(name==="useCase_description"){
            set_uc_description(value)
        }
        else if(name==="code"){
            setCode(value)
        }
        else if(name==="preCondition"){
            setPreCondition(value)
        }
        else if(name==="postCondition"){
            setPostCondition(value)
        }
    }


    return <form onSubmit={handleSubmit}>
    <div className="div-flex">

    <div className="flex-item">
        <h2>Use Case</h2>
    </div>
    <div className="flex-item">

        <label >Name</label>
        <textarea type="text"
                        name="useCase_name"
                        value={uc_name}
                        onChange={handleChange}
                        maxLength={45}
                        required/>

    </div>
    <div className="flex-item">

        <label>Description</label>
        <textarea type="text"
                        name="useCase_description"
                        value={uc_description}
                        onChange={handleChange}
                        className="description"
                        maxLength={500}
                        required/>
    </div>
    <div className="flex-item">
        <label >Code</label>
        <textarea type="text"
                        name="code"
                        value={code}
                        onChange={handleChange}
                        maxLength={45}
                        required/>
    </div>

    <div className="flex-item">
        <label >PreCondition</label>
        <textarea type="text"
                        name="preCondition"
                        value={preCondition}
                        onChange={handleChange}
                        maxLength={45}
                        required/>
    </div>

    <div className="flex-item">
        <label >PostCondition</label>
        <textarea type="text"
                        name="postCondition"
                        value={postCondition}
                        onChange={handleChange}
                        maxLength={45}
                        required/>
    </div>

    <div className="flex-item">
        <input type="submit" className="submit-button" value="Add"/>
    </div> 

    </div>
</form>
}


export default UC_Form;