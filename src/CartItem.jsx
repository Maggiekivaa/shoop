import React, { useState } from "react";

function CartItem({ item, removeFromCart, updateQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <li>
      <span>{item.name} - Ksh{item.price} x {item.quantity}</span>
      <input 
        type="number" 
        value={quantity} 
        onChange={handleQuantityChange} 
        min="1" 
      />
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
}

export default CartItem;
