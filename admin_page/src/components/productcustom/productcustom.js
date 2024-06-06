import React, { useState } from 'react';
import './productcustom.css';
function ProductCustom() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="pc">
        <div className="custom">
          <h2>Text</h2>
          <input type="text" placeholder="" className="search-input" />
        </div>
        <div className="back">
            <div className="backtext">
      <label htmlFor="new-product-checkbox">
     New product?
        <input
          type="checkbox"
          id="new-product-checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
      </label>
      {isChecked && (
        <p>
         A "New" badge will be
          added to this product.
        </p>
      )}
      </div>
      </div>
    </div>
  );
}

export default ProductCustom;