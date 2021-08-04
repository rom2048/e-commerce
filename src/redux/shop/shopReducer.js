import ShopData from './ShopData.js';

const initialStateShop = {
  collections: ShopData
};

const shopReducer = (state=initialStateShop, action={}) => {
  switch(action.type){
    default:
      return state;
  }
}

export default shopReducer;