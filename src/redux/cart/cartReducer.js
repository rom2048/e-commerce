import { 
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from '../constants.js';
import { addClothToCart, removeItemFromCart } from './cartUtils.js';

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
    case CLEAR_ITEM_FROM_CART:
      return Object.assign({}, state, {cartItems: state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      )});
    case REMOVE_ITEM:
      return Object.assign({}, state, {cartItems: removeItemFromCart(state.cartItems, action.payload)});
    default:
      return state;
  }
}

export default cartReducer;