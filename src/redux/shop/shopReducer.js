import { UPDATE_COLLECTIONS } from '../constants';

const initialStateShop = {
  collections: null
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