import axios from 'axios';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import { GET_MEMO, GET_MEMO_SUCCESS, GET_MEMO_FAILURE, getMemoAction, IMemoState } from 'reducers/memo';
import { getItem } from 'lib/utils/LocalStorage';

/**
 * Get memo
 */
function getMemoAPI(memoId: number): Promise<IMemoState> {
  return axios.get(`/memo/api/memo/${memoId}`);
}
function* getMemo(action: getMemoAction) {
  const { data } = yield call(getMemoAPI, action.payload.memoId);
  try {
    yield put({
      type: GET_MEMO_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: GET_MEMO_FAILURE,
    });
  }
}
function* watchGetMemo() {
  yield takeLatest(GET_MEMO, getMemo);
}

export default function* memoSaga() {
  yield all([
    watchGetMemo(),
  ]);
}
