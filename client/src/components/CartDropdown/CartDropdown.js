import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './CartDropdownStyles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  console.log(cartItems);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        { cartItems.length
          ? cartItems.map(cloth => <CartItem key={cloth.id} item={cloth} />)
          : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        }
      </CartItemsContainer>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}>Go to checkout</CustomButton>
    </CartDropdownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));