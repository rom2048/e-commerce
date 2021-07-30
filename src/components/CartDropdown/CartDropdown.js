import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;