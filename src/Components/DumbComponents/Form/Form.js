import "./Form.css"
import React from "react";


function Form(props){

    if(props.type.toUpperCase()==="MODULE"){
        return <form>
        <div className="div-flex">
        <div className="flex-item">
            <h2>Module</h2>
        </div>
        <div className="flex-item">
    
            <label >Name</label>
            <textarea type="text"  maxLength={45}/>
    
        </div>
        <div className="flex-item">
    
            <label>Description</label>
            <textarea type="text" className="description" maxLength={500}/>
        </div>
        <div className="flex-item">
            <input type="submit" className="submit-button" value={"Add"}/>
        </div>
        </div>
    </form>
    }// if props.type.toUpperCase()==="MODULE"
    else if(props.type.toUpperCase()==="FEATURE"){
        return <form>
        <div className="div-flex">
        <div className="flex-item">
            <h2>Feature</h2>
        </div>
        <div className="flex-item">
    
            <label >Name</label>
            <textarea type="text"  maxLength={45}/>
    
        </div>
        <div className="flex-item">
    
            <label>Description</label>
            <textarea type="text" className="description" maxLength={500}/>
        </div>
        <div className="flex-item">
            <input type="submit" className="submit-button" value={"Add"}/>
        </div>
        </div>
    </form>
    }// if props.type.toUpperCase()==="FEATURE"

    else if(props.type.toUpperCase()==="PRODUCT"){
        return <form>
        <div className="div-flex">
            
        <div className="flex-item">
            <h2>Product</h2>
        </div>
        <div className="flex-item">
    
            <label >Name</label>
            <textarea type="text"  maxLength={45}/>
    
        </div>
        <div className="flex-item">
    
            <label>Description</label>
            <textarea type="text" className="description" maxLength={500}/>
        </div>
        <div className="flex-item">
            <input type="submit" className="submit-button" value={"Add"}/>
        </div>
        </div>
    </form>
    }

    else if(props.type.toUpperCase()==="USECASE"){

        return <form>
        <div className="div-flex">

        <div className="flex-item">
            <h2>Use Case</h2>
        </div>
        <div className="flex-item">

            <label >Name</label>
            <textarea type="text"  maxLength={45}/>

        </div>
        <div className="flex-item">

            <label>Description</label>
            <textarea type="text" className="description" maxLength={500}/>
        </div>
        <div className="flex-item">
            <label >Code</label>
            <textarea type="text"  maxLength={45}/>
        </div>

        <div className="flex-item">
            <label >PreCondition</label>
            <textarea type="text"  maxLength={45}/>
        </div>

        <div className="flex-item">
            <label >PostCondition</label>
            <textarea type="text"  maxLength={45}/>
        </div>

        <div className="flex-item">
            <input type="submit" className="submit-button" value="Add"/>
        </div> 

        </div>
    </form>
    }
        
}

export default Form;

//usage example
//<Form type={"product"}/>