import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  SIGN_OUT_SUCCESS
} from '../constants';

import { clearCart } from './cartActions';

export function* clearCartOnSignOut(){
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield(all([
    call(onSignOutSuccess)
  ]));
}