const useProcessCartItemsData = (productToAdd) => {
	let existingCartItems;
	if (localStorage.key('cartItems')) {
		const storedData = localStorage.getItem('cartItems');
		existingCartItems = JSON.parse(storedData);
	} else {
		existingCartItems = [];
		localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
	}

	if (productToAdd) {
		if (isProductInCart(existingCartItems, productToAdd)) {
			const productInCart = existingCartItems.find(item => item.id === productToAdd.id);
			productInCart.quantity = productInCart.quantity + 1;
		} else {
			existingCartItems.push({...productToAdd, quantity: 1});
		}
	}
	localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
	return existingCartItems;
};

function isProductInCart(existingCart, product) {
	if (!existingCart || !existingCart.length) {
		return false;
	}
	return existingCart.some(item => item.id === product.id);
}

export default useProcessCartItemsData;