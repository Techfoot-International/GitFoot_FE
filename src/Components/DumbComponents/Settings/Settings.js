import React from "react";
import "./Logo_&_Settings.css"
import settings from "./settings.png"

function Settings(){
    return <div className='settings'>
            <div><img src={settings}/></div>
    </div>
}

export default Settings;