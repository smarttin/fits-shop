import { takeLatest, all, call, put } from 'redux-saga/effects';

import ShopActiontypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActiontypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
