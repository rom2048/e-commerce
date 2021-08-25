import React from 'react';
import { ReactComponent as ShoppingCard} from '../../assets/shopbag.svg';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { createStructuredSelector } from 'reselect';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './CartIconStyles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon/>
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);