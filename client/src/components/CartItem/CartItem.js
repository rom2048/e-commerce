import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer
} from './CartItemStyles';

const CartItem = ({ item: {imageUrl, price, name, quantity}  }) => {
  return (
    <div className='cart-item'> 
      <img src={imageUrl} alt='cloth' />
      <div className='item-details'> 
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  );
}

export default CartItem;