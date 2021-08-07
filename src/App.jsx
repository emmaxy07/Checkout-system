import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';

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
      <Navbar />
      <button onClick={fetchProducts}>Click to get products</button>
      <p>{products.length}</p>
    </div>
  )
};

export default App;
