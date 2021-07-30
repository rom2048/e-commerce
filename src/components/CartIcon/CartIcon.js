import React from 'react';
import { ReactComponent as ShoppingCard} from '../../assets/shopbag.svg';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cartActions';
import './CartIcon.scss';

const CartIcon = ({ toogleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toogleCartHidden}>
      <ShoppingCard className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    toogleCartHidden: () => dispatch(toogleCartHidden())
  }
}

export default connect(null, mapDispatchToProps)(CartIcon);