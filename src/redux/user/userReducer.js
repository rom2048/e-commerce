import { SET_CURRENT_USER } from '../constants.js';

const initialStateUser = {
  currentUser: null
}

const userReducer = (state=initialStateUser, action={}) => {
  switch(action.type){
    case SET_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.payload});
    default:
      return state;
  }
}

export default userReducer;