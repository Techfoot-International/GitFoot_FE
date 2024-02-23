import "./Detail.css"
import React from "react"

function DetailBox(props){ 
    
    const keys=Object.keys(props.detail)

    if(keys.length===0){
        return;
    }else if(keys.length!==5){

        return <div className="detail-box"> 
                <div className="div-flex1">
                    <div className="flex-item1 name">
                        <h2>{props.detail.name}</h2>
                    </div>
                    <div className="flex-item1">
                        <h3>Description</h3>
                        <p>{props.detail.description}</p>
                    </div>
                    
                </div>
            </div>
    }else{
        return <div className="detail-box"> 
            <div className="div-flex1">
                <div className="flex-item1 name">
                    <h2>{props.detail.name}</h2>
                </div>
                <div className="flex-item1">
                <h3>Description</h3>
                <p>{props.detail.description}</p>
                <h3>Code</h3>
                <p>{props.detail.code}</p>
                <h3>Pre-Condition</h3>
                <p>{props.detail.preCondition}</p>
                <h3>Post-Condition</h3>
                <p>{props.detail.postCondition}</p>

            </div>
        </div>
        
    </div>
    }
}

export default DetailBox;

/*  pass an object to Detail component e.g 
    Random={ name: "SpreeSuite", description: "This is a product"} OR
    Random={ name: "SpreeSuite", description: "This is a product", code: "12", preCondition: "abc", postCondition: "efg"}*/

//  <DetailBox detail={Random}/>