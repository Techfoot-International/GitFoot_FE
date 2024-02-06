import "./Form.css"
import React from "react";


function Form(props){
    return <form>
        <div className="div-flex">
        <div className="flex-item">

            <label >Name</label>
            <textarea type="text"  maxLength={45}/>

        </div>
        <div className="flex-item">

            <label>Description</label>
            <textarea type="text" className="description" maxLength={500}/>

        <div className="flex-item">
            <input type="submit" className="submit-button" value={"Next"}/>
        </div>
        </div>
        </div>
    </form>
        
}

export default Form;