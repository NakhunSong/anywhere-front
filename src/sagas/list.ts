import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET_MEMO_LIST, GET_MEMO_LIST_SUCCESS, GET_MEMO_LIST_FAILURE } from 'reducers/list';
import { RESET_EDIT } from 'reducers/edit';
import { IMemoState } from 'reducers/memo';
import { getNextId } from 'lib/utils/LocalStorage';

export default function* listSaga() {
  yield all([
    watchGetMemoList(),
  ]);
}

/**
 * Get memo list from backend
 */
function* watchGetMemoList() {
  yield takeLatest(GET_MEMO_LIST, getMemoList);
}
function getMemoListAPI(): Promise<IMemoState[]> {
  return axios.get('/memo/api/memos');
}
function* getMemoList() {
  try {
    const { data } = yield call(getMemoListAPI);
    const memoId: number = getNextId('list');
    try {
      yield put({
        type: GET_MEMO_LIST_SUCCESS,
        payload: data,
      });
      yield put({
        type: RESET_EDIT,
        payload: {
          memoId,
        },
      });
  } catch (e) {
    yield put({
      type: GET_MEMO_LIST_FAILURE,
    });
  }
} finally {
  console.log('success');
}}
