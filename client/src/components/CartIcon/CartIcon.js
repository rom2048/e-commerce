import React from 'react';
import { ReactComponent as ShoppingCard} from '../../assets/shopbag.svg';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { createStructuredSelector } from 'reselect';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingCard className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
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