import {
  FETCH_COLLECTIONS_PENDING,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILED
} from '../constants';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase';


export const fetchCollectionsPending = () => ({
  type: FETCH_COLLECTIONS_PENDING,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailed = (error) => ({
  type: FETCH_COLLECTIONS_FAILED,
  payload: error
})

export const fetchCollectionsPendingAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsPending());

    collectionRef.get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap))
      })
      .catch(error => dispatch(fetchCollectionsFailed(error.message)))
  }
}