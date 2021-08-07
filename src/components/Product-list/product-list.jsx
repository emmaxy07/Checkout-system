import React from 'react';
import Product from '../product/product';
import './product-list.css';


function ProductList ({products}) {
	return (
		<div className="product-list">
			{
				products.map(product =>
					<Product key={product.id} product={product}/>
				)
			}
		</div>
	)
}

export default ProductList;
