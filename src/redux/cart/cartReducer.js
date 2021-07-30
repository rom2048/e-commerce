import { TOGGLE_CART_HIDDEN } from '../constants.js';

const initialStateCart = {
  hidden: true
};

const cartReducer = (state=initialStateCart, action={}) => {
  switch(action.type){
    case TOGGLE_CART_HIDDEN:
      return Object.assign({}, state, {hidden: !state.hidden})
    default:
      return state;
  }
}

export default cartReducer;