import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  console.log(cartItems);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        { cartItems.length
          ? cartItems.map(cloth => <CartItem key={cloth.id} item={cloth} />)
          : <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}>Go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));