import React, {useState} from 'react';
import './App.css';
import axios from 'axios';;



function App(){
  const PAGE_PRODUCTS = 'products';
  const PAGE_CART = 'cart';
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('PAGE_PRODUCTS'); 

  const [products, setProducts] = useState([]);

  const apiURL = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    const response = await axios.get(apiURL)

    this.setProducts(response.data)
  }

  const addToCart = (product) =>{
    setCart([...cart, product]);
    fetchData();
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderProducts = () =>(
      <>
      <h1>Products</h1>
    <div className="products">
      {products.map((product, idx) =>(
      <div className="product" key={idx}>
        <h3>{product.id}</h3>
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
      <h4>{product.description}</h4>
      <h4>{product.category}</h4>
      <img src={product.image} alt={product.title} />
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
    ))}
    </div>
    </>
  );
  
  const renderCart = () => (
    <>
      <h1>Cart</h1>
    <div className="products">
      {cart.map((product, idx) =>(
      <div className="product" key={idx}>
        <h3>{product.id}</h3>
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
      <h4>{product.description}</h4>
      <h4>{product.category}</h4>
      <img src={product.image} alt={product.title} />
      {/*<button onClick={() =>addToCart(product)>Add to cart</button>*/}
    </div>
    ))}
    </div>
    </>
  );

  return (
    <div className="App">
    <header>
    <button onClick={() => navigateTo(PAGE_CART)}>Go to cart({cart.length})</button>
    <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
    </header>
    {page === PAGE_PRODUCTS && renderProducts()}
    {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;