import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import ProductList from './components/Product-list/product-list';
import Cart from './components/Cart/Cart';
import useProcessCartItemsData from './utils/cartItemAdder';

const App = () => {
  const [products, setProducts] =useState([]);
  // const [cartItems, setCartItems] =useState([]);
  const [showModal, toggleShowModal] =useState(false);

  const [productToAdd, setProductToAdd] = useState(null);

  const cartItems = useProcessCartItemsData(productToAdd);

  function updateCart(product) {
    // console.log(product);
    setProductToAdd(product);
	}

  useEffect(() => {
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   const cartItems = useProcessCartItemsData(productToAdd);
  // });

  function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(productsData => setProducts(productsData));
  }

  return (
    <div className="App">
      <Navbar noOfItemsIncart={cartItems.length} onOpen={() => toggleShowModal(true)} />
      <ProductList products={products} updateCart={updateCart} />
      <Cart cartItems={cartItems} showModal={showModal} onClose={() => toggleShowModal(false)} />
    </div>
  )
};

export default App;
