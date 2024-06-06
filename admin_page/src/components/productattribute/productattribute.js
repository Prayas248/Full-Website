
import React, { useState } from 'react';
import './productattribute.css';

const AttributeForm = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="attribute-form">
      <div className="form-header">
        <button className="add-new">Add new</button>
        <button className="add-existing">Add existing <span>&#9660;</span></button>
        <a href="#expand" onClick={handleExpandToggle}>
          {isExpanded ? 'Expand/close' : 'Expand/close'}
        </a>
      </div>

      {isExpanded && (
        <div className="form-content">
          <h3>New Attribute</h3>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Value(s):</label>
            <textarea />
          </div>
          <div className="form-group">
            <input type="checkbox" id="visible" />
            <label htmlFor="visible">Visible on the product page</label>
          </div>
        </div>
      )}

      <button className="save-attributes">Save Attributes</button>
      <a href="#expand" onClick={handleExpandToggle}>
        {isExpanded ? 'Expand/close' : 'Expand/close'}
      </a>
    </div>
  );
};

export default AttributeForm;
