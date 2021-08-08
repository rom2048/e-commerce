import { takeEvery } from 'redux-saga/effects';
import { 
  FETCH_COLLECTIONS_PENDING,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILED
} from '../constants';

export function* fetchCollectionsAsync(){
  yield console.log('=? i dont know whats happens')
}

export function* fetchCollectionsPending() {
  yield takeEvery(FETCH_COLLECTIONS_PENDING, fetchCollectionsAsync )
}