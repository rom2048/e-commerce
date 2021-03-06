import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase';
import { 
  fetchCollectionsSuccess,
  fetchCollectionsFailed
} from './shopActions';
import { 
  FETCH_COLLECTIONS_PENDING,
} from '../constants';

export function* fetchCollectionsAsync(){
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailed(error.message));
  }
}

export function* fetchCollectionsPending() {
  yield takeLatest(FETCH_COLLECTIONS_PENDING, fetchCollectionsAsync );
}


export function* shopSagas() {
  yield all([call(fetchCollectionsPending)])
}