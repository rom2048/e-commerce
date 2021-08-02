import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cloth => <CartItem key={cloth.id} item={cloth} />)
        }
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);