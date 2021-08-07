import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import ProductList from './components/Product-list/product-list';

const App = () => {
  const [products, setProducts] =useState([]);
  const [cartItems, setCartItems] =useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(productsData => setProducts(productsData));
  }

  return (
    <div className="App">
      <Navbar noOfItemsIncart={cartItems.length} />
      <ProductList products={products} />
      {/* <Cart /> */}
    </div>
  )
};

export default App;
