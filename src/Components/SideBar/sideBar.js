import React, { useState, useEffect } from 'react';
import "./SideBar.css";
import Form from "../DumbComponents/Form/Form.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Data from '../MockStore/Data.js';

function SideBar() {
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState(null);

  const showOnlyForm = () => {
    setShowForm(true);
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

  const handleProductClick = async () => {
    try {
      const response = await Data.getProduct();
      const data = await response.json();
      setProduct(data.product);
      console.log(data.product);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  return (
    <main className="sidebar">
      <div className='wrapper'>
        <div className="container grid-item1">
          <div className='sub-container'>
            <div className="item1">
              <a href="#" className="link btn1" onClick={handleProductClick}><b>Product</b></a>
            </div>
            <div className="item2">
              <button className="add-button" onClick={showOnlyForm}>
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </button>
            </div>
          </div> 
        </div>
      </div>
          <div>
                {showForm && <Form type={"product"}/>}
                {product?.map((p)=>(<div key={p}>
                    <p>Name: {p.name}</p>
                  </div>))}
            </div>
    </main>
  );
}


export default SideBar;

