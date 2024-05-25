import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './nav';

import "./productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/products/get')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => setError('Error fetching products: ' + error.message));
  }, []);

  const filterByCategory = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };





  return (
    <div>
      <Nav filterByCategory={filterByCategory}  />
      <div className="product-list">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <button>Add to Order</button>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default ProductList;
