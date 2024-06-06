// src/components/Product.js
import React, { useState } from 'react';
import './product.css';
import Handbags from '../../assets/handbag.png';
import like from "../../assets/like.png";

const Product = ({ image, date, title,id }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`blogproduct-card ${hover ? 'hover' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} />
      <div className="blogtitleContainer">  
        <h3>{title}</h3>
      </div>
      <p> {date}</p> 
    </div>
  );
};

export default Product;
