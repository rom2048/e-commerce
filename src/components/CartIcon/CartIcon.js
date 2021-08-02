import React from 'react';
import { ReactComponent as ShoppingCard} from '../../assets/shopbag.svg';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cartActions';
import './CartIcon.scss';

const CartIcon = ({ toogleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toogleCartHidden}>
      <ShoppingCard className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return (
    {
      itemCount: selectCartItemsCount(state)
    }
  );
}

const mapDispatchToProps = dispatch => {
  return {
    toogleCartHidden: () => dispatch(toogleCartHidden())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);