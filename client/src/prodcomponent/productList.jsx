import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './nav';


import "./productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [order, setOrder] = useState({ products: [], totalPrice: 0 });
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


const addToOrder = (product) => {
  const updatedProducts = order.products.concat(product)
     const updatedTotalPrice = order.totalPrice + product.price

  setOrder({ products: updatedProducts, totalPrice: updatedTotalPrice })
  axios.post('http://localhost:3000/orders/create', {
   
    products: JSON.stringify(updatedProducts),
    totalPrice: updatedTotalPrice,
  })
    .then(response => {
      console.log('Order updated', response.data)
    })
 
}




return (
  <div>
    <h1 class="site-title"> GameZone</h1>
    <Nav filterByCategory={filterByCategory} />
   
    <div className="product-list">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {filteredProducts.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Category: {product.category}</p>
          <button onClick={() => addToOrder(product)}>Add to Order</button>
        </div>
      ))}
    </div>
    <div className="order-summary">
      <h2>Order Summary</h2>
      {order.products.map((product, index) => (
        <div key={index} className="order-product">
          <p>{product.name}: ${product.price}</p>
        </div>
      ))}
      <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
    </div>
  </div>
);
};

export default ProductList;
