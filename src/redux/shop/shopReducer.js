import ShopData from './ShopData.js';
import { UPDATE_COLLECTIONS } from '../constants';

const initialStateShop = {
  collections: ShopData
};

const shopReducer = (state=initialStateShop, action={}) => {
  switch(action.type){
    case UPDATE_COLLECTIONS:
      return Object.assign({}, state, {collections: action.payload})
    default:
      return state;
  }
}

export default shopReducer;