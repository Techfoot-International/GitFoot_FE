import React, { useState } from 'react';
import "./SideBar.css";
import Form from "../Form/Form.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  const [showForm, setShowForm] = useState(false);

  const showOnlyForm = () => {
    setShowForm(true);
  };

  return (
    <main className="sidebar">
    
      <div className="container">
    
        <div className="item1">
          <a href="#" className="link btn1" ><b>Product</b></a>
        </div>
    
        <div className="item2">
          <button className="add-button" onClick={showOnlyForm}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        
      </div>

      <div className="form-container">
        {showForm && <Form type={"product"}/>}
      </div>
    </main>
  );
}

export default SideBar;
