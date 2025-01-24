import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import './App.css';

// Importing images
import tshirtImage from "./assets/tshirt.jpeg";
import jeansImage from "./assets/jeans.jpeg";
import sneakersImage from "./assets/sneakers.jpeg";
import hatImage from "./assets/hat.jpeg";
import socksImage from "./assets/socks.jpeg";

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const products = [
    { id: 1, name: "T-Shirt", price: 20, Image: tshirtImage },
    { id: 2, name: "Jeans", price: 40, Image: jeansImage },
    { id: 3, name: "Sneakers", price: 60, Image: sneakersImage },
    { id: 4, name: "Hat", price: 15, Image: hatImage },
    { id: 5, name: "Socks", price: 5, Image: socksImage }
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  return (
    <div className="App">
      <h1>Simple E-Commerce Cart</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        className="search-bar"
      />

      {/* Product List */}
      <ProductList products={filteredProducts} addToCart={addToCart} />

      {/* Cart */}
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
