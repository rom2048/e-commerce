import {
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILED,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILED
} from '../constants.js';

const initialStateUser = {
  currentUser: null,
  error: null
}

const userReducer = (state=initialStateUser, action={}) => {
  switch(action.type){
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return Object.assign({}, state, {currentUser: action.payload, error: null});
    case EMAIL_SIGN_IN_FAILED:
    case GOOGLE_SIGN_IN_FAILED:
      return Object.assign({}, state, {error: action.payload })
    default:
      return state;
  }
}

export default userReducer;