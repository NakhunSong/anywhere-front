import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET_MEMO_LIST, GET_MEMO_LIST_SUCCESS, GET_MEMO_LIST_FAILURE } from 'reducers/list';
import { RESET_EDIT } from 'reducers/edit';
import { IMemoState } from 'reducers/memo';
import { getItem, getNextId } from 'lib/utils/LocalStorage';

export default function* listSaga() {
  yield all([
    watchGetMemoList(),
  ]);
}

function* watchGetMemoList() {
  yield takeLatest(GET_MEMO_LIST, getMemoList);
}
function getMemoListAPI(): IMemoState[] {
  return getItem('list');
}
function* getMemoList() {
  try {
    const result: IMemoState[] = yield call(getMemoListAPI);
    const id: number = getNextId('list');
    try {
      yield put({
        type: GET_MEMO_LIST_SUCCESS,
        payload: result,
      });
      yield put({
        type: RESET_EDIT,
        payload: {
          id,
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
