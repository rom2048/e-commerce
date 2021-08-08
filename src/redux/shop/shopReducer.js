import { 
  FETCH_COLLECTIONS_PENDING,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILED
} from '../constants';

const initialStateShop = {
  collections: null,
  isFetching: false,
  error: ''
};

const shopReducer = (state=initialStateShop, action={}) => {
  switch(action.type){
    case FETCH_COLLECTIONS_PENDING:
      return Object.assign({}, state, {isFetching: true});
    case FETCH_COLLECTIONS_SUCCESS:
      return Object.assign({}, state, {isFetching: false, collections: action.payload});
    case FETCH_COLLECTIONS_FAILED:
      return Object.assign({}, state, {error: action.payload, isFetching: false});
    default:
      return state;
  }
}

export default shopReducer;