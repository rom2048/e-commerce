import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../constants.js';
import { addClothToCart } from './cartUtils.js';

const initialStateCart = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state=initialStateCart, action={}) => {
  switch(action.type){
    case TOGGLE_CART_HIDDEN:
      return Object.assign({}, state, {hidden: !state.hidden});
    case ADD_ITEM:
      return Object.assign({}, state, {cartItems: addClothToCart(state.cartItems, action.payload)});
    default:
      return state;
  }
}

export default cartReducer;