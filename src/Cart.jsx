import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, removeFromCart, updateQuantity }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
            />
          ))}
        </ul>
      )}
      <div>Total: Ksh{totalPrice}</div>
    </div>
  );
}

export default Cart;
