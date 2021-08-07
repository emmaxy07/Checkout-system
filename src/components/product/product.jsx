import React from 'react';
import './product.css';


function Product ({product}) {
	return (
		<div className="product">
						<img src={product.image} alt={product.title} />
						{/* <h6>{product.title}</h6> */}
						<p>${product.price}</p>
						<button>Add to Cart</button>
		</div>
	)
}

export default Product;
