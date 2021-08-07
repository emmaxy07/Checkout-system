import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import ProductList from './components/Product-list/product-list';

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
      <ProductList products={products} />
      {/* <Cart /> */}
    </div>
  )
};

export default App;
