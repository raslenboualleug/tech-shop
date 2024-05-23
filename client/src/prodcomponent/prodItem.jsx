import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = ({ match }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        const filteredProducts = response.data.filter(product => product.category.toLowerCase() === match.params.category.toLowerCase());
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [match.params.category]);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
