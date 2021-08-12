import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
} from '../constants.js';

const initialStateUser = {
  currentUser: null,
  error: null
}

const userReducer = (state=initialStateUser, action={}) => {
  switch(action.type){
    case SIGN_IN_SUCCESS:
      return Object.assign({}, state, {currentUser: action.payload, error: null});
    case SIGN_IN_FAILED:
      return Object.assign({}, state, {error: action.payload })
    default:
      return state;
  }
}

export default userReducer;