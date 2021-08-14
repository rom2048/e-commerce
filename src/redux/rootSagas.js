import { all, call } from 'redux-saga/effects';

import { fetchCollectionsPending } from './shop/shopSagas';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';


export default function* rootSaga() {
  yield all([
    call(fetchCollectionsPending),
    call(userSagas),
    call(cartSagas)
  ])
}