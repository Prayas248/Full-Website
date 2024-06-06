import React from 'react';
import './productlink.css';
const ProductLink = () => {
  return (
    <div className="linkcontainer">
      <div className="linkrow">
        <div className="col-md-6">
          <p>Upsells</p>
          <input type="text" placeholder="Search for product" className="search-input" />
        </div>
        <div className="col-md-6">
          <p>Cross-sells</p>
          <input type="text" placeholder="Search for product" className="search-input" />
        </div>
      </div>
    </div>
  );
};

export default ProductLink;