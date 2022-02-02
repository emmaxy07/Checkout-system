import React, { useState } from 'react';
// import Product from '../product/product';
import './navbar.css';



function Navbar ({noOfItemsIncart, updatecart, viewCart, onRemove}) {
	const [showCart, setShowCart] = useState(false)
	const cartItems = viewCart()
	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
	const toggleCartDisplay = () => setShowCart(!showCart)
	const style = {
		cursor: "pointer"
	}
	return (
		<nav className="navbar">
			<h3>Navbar</h3>
			<div className="cart-container">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" onClick={toggleCartDisplay} className='svg' style={style}>
					<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
				</svg>
				<p updatecart={updatecart}>{noOfItemsIncart}</p>
			</div>
			<div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {showCart && cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => updatecart(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {showCart && cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2"><strong>Items Price</strong></div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
			<br />
            <div className="row">
              <div className="col-2"><strong>Tax Price</strong></div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
			<br />
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
			  <br />
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
		</nav>
	)
}

export default Navbar;
