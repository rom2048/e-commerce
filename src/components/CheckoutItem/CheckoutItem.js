import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItemToCart, removeItem } from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, clearItem, addItemToCart, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='cloth'/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='minus' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='plus' onClick={() => addItemToCart(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);