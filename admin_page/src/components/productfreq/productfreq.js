import React, { useState,useEffect } from 'react';
import './productfreq.css';

function ProductFeq() {
  const [discount, setDiscount] = useState(0);
  const [items, setItems] = useState(2);
  const [checked, setChecked] = useState(false);

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleItemsChange = (event) => {
    setItems(event.target.value);
  };

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm.length) { // Adjust minimum search length if needed
        await fetch(`http://localhost:4000/searchProducts/${searchTerm}`)
          .then((res) => res.json())
          .then((data) => { setSearchResults(data.data) })
      } else {
        setSearchResults([]); // Clear results if search term is too short
      }
    };
    fetchProducts();
  }, [searchTerm]); // Re-run useEffect on searchTerm change

  const handleCloseSearchResults = () => {
    setIsSearchResultsOpen(false);
  };

  const handleProductSelection = (productId,productname) => {
    // Check if product is already selected
    const isAlreadySelected = selectedProducts.some((product) => product.id === productId);
    if (!isAlreadySelected) {
      setSelectedProducts((prevProducts) => [...prevProducts, { id: productId, name:productname}]); // Add product with ID
    }
    setSearchTerm(''); // Clear input field
    setIsSearchResultsOpen(false); // Close results
    console.log(selectedProducts)
  };

  const renderSearchResults = () => {
    return (searchResults.map((product) => (
      <li key={product._id}>
        <button type="button" onClick={() => handleProductSelection(product._id,product.name)}>
          {product.name}
        </button>
      </li>
    ))
  );
  };





  return (
    <div className="feqcontainer">
      <div className="feqproduct-search">
      <label htmlFor="product-search">Select products:</label>
      <input
        type="text"
        id="product-search"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => setIsSearchResultsOpen(true)}
      />
      {isSearchResultsOpen && searchResults.length > 0 && ( // Only render results if there are any
        <ul className="search-results">{renderSearchResults()}</ul>
      )}
      <div>Selected Products:</div>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>{product.name} (ID: {product.id})</li>
        ))}
      </ul>
      </div>
      <div className="feqdiscount">
        <label htmlFor="discount">Discount:</label>
        <input
          type="number"
          id="discount"
          value={discount}
          onChange={handleDiscountChange}
        />

      </div>
      <div className="feqcheck-all">
        <label htmlFor="feqcheck-all">Checked all</label>
        <input
          type="checkbox"
          id="check-all"
          checked={checked}
          onChange={handleCheckChange}
        />
      </div>
      <div className="feqitems">
        <label htmlFor="items"><p>Number of items to get discount:</p></label>
        <input
          type="number"
          id="items"
          value={items}
          onChange={handleItemsChange}
        />
      </div>
    </div>
  );
}

export default ProductFeq;