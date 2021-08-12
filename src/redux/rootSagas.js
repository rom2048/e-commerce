import { all, call } from 'redux-saga/effects';

import { fetchCollectionsPending } from './shop/shopSagas';
import { userSagas } from './user/userSagas'

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsPending),
    call(userSagas)
  ])
}