import React, { useState, useEffect } from 'react';
import './Tab_AddButton.css'

function Tab(props){

    if(props.type==="all_products"){
        return <div className="flex-items">
        <p>{props.tabName}</p>
        </div>
    }
    else if(props.type==="one_product"){
        return <div className="flex-items tab-names">
        <p>{props.tabName}</p>
        </div>
    }
    else if(props.type==="module"){
        return <div className="flex-items tab-names">
        <p>{props.tabName}</p>
        </div>
    }
    else if(props.type==="feature"){
        return <div className="flex-items tab-names">
        <p>{props.tabName}</p>
        </div>
    }
    else if(props.type==="useCase"){
        return <div className="flex-items tab-names">
        <p>{props.tabName}</p>
        </div>
    }
}

export default Tab;