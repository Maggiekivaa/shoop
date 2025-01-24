import React from "react";

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.Image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>Ksh{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
