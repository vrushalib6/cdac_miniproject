import React from 'react';

const ShoppingCart = ({ cart }) => {
  
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;