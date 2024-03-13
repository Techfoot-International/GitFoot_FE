import React, { useState } from "react";
import "./Form.css";
import Data from "../../MockStore/MockData.js"

function UC_Form(){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCode] = useState("");
    const [preCondition, setPreCondition] = useState("");
    const [postCondition, setPostCondition] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const response = await Data.createProduct({ name, description });
                console.log(response); 
                setName("");
                setDescription("");
            
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleSubmitUseCase = async (e) => {
        e.preventDefault();
        try {
                const response = await Data.createUseCase({ name, description,code,preCondition,postCondition });
                console.log(response); 
                setName("");
                setDescription("");
                setCode("");
                setPreCondition("")
                setPostCondition("")
            
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return <form onSubmit={handleSubmitUseCase}>
    <div className="div-flex">

    <div className="flex-item">
        <h2>Use Case</h2>
    </div>
    <div className="flex-item">

        <label >Name</label>
        <textarea type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={45}
                        required/>

    </div>
    <div className="flex-item">

        <label>Description</label>
        <textarea value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="description"
                        maxLength={500}
                        required/>
    </div>
    <div className="flex-item">
        <label >Code</label>
        <textarea type="text"
                        value={name}
                        onChange={(e) => setCode(e.target.value)}
                        maxLength={45}
                        required/>
    </div>

    <div className="flex-item">
        <label >PreCondition</label>
        <textarea type="text"
                        value={name}
                        onChange={(e) => setPostCondition(e.target.value)}
                        maxLength={45}
                        required/>
    </div>

    <div className="flex-item">
        <label >PostCondition</label>
        <textarea type="text"
                        value={name}
                        onChange={(e) => setPostCondition(e.target.value)}
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