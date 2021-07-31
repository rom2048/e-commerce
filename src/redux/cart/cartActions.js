import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../constants.js';

export const toogleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item
});