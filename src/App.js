import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [products, SetProducts] =useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(productsData => SetProducts(productsData));
  }

  return (
    <div className="App">
      <p>Apple</p>
      <button onClick={fetchProducts}>Click to get products</button>
      <p>{products.length}</p>
    </div>
  )
};

export default App;
