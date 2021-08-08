import React from 'react';
import './Cart.css';

function Cart ({cartItems, showModal, onClose}) {
	// console.log(cartItems);
	if (showModal === false) {
		return null;
	}
	return (
		<div className="cart" onClick={onClose}>
			<div className="cart-content" onClick={e => e.stopPropagation()}>		
				<div className="cart-header">
					<h4>Item</h4>
					<h4>Price</h4>
					<h4>Qty</h4>
				</div>
				<div className="cart-body">
					{
						cartItems.length ?
						cartItems.map(({id, title, price, quantity}) =>
							<div key={id} className="cart-item">
								<p className="title">{title}</p>
								<p>${price}</p>
								<p>{quantity}</p>
							</div>
						)
						:
						<p className="no-item">No Item In Cart</p>
					}
				</div>
				<div className="cart-footer">
					<button onClick={onClose}>Close</button>
				</div>
			</div>
		</div>
	)
}

export default Cart;
