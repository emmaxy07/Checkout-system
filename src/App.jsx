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

  const updateCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    console.log(cartItems, product, exist)
		if(exist) {
			setCartItems(cartItems.map((x) => x.id ===product.id ? {...exist, qty: exist.qty + 1} : x))
		} else {
			setCartItems([...cartItems, {...product, qty: 1}])
		}
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const viewCart = () => cartItems

  return (
    <div className="App">
      <Navbar noOfItemsIncart={cartItems.length}  updatecart={updateCart} viewCart={viewCart} onRemove={onRemove} />
      <ProductList products={products} setCartItems={updateCart} viewCart={viewCart} />
      {/* <Cart /> */}
    </div>
  )
};

export default App;
