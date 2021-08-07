import React, {useState} from 'react';
import Product from '../product/product';
import './product-list.css';


function ProductList ({products}) {
	const [cartItems, setCartItems] =useState([]);

	function updateCart(product) {
		setCartItems([...cartItems, product]);
	}

	return (
		<div className="product-list">
			{
				products.map(product =>
					<Product key={product.id} product={product} updatecart={updateCart}/>
				)
			}

			<p>{cartItems.length}</p>
		</div>
	)
}

export default ProductList;
