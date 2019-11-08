import axios from 'axios';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import { ADD_MEMO, RESET_EDIT, EDIT_MEMO, REMOVE_MEMO, addMemoAction, editMemoAction, removeMemoAction, ADD_MEMO_FAILURE, ADD_MEMO_SUCCESS, REMOVE_MEMO_SUCCESS, REMOVE_MEMO_FAILURE } from 'reducers/edit';
import { GET_MEMO_SUCCESS, RESET_MEMO, IMemoState } from 'reducers/memo';
import { getItem, setItem, pushItem, getNextId } from 'lib/utils/LocalStorage';

/**
 * Add memo
 */
function addMemoAPI(memo: IMemoState): Promise<number> {
  return axios.post('/memo/api/memo', memo);
}
function* addMemo(action: addMemoAction) {
  try {
    const { memo } = action.payload;
    yield call(addMemoAPI, memo);
    const memoId: number = memo.memoId + 1;
    yield put({
      type: GET_MEMO_SUCCESS,
      payload: memo,
    });
    yield put({
      type: RESET_EDIT,
      payload: {
        memoId,
      },
    });
    yield put({
      type: ADD_MEMO_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: ADD_MEMO_FAILURE,
    });
    console.error(e);
  }
}
function* watchAddMemo() {
  yield takeLatest(ADD_MEMO, addMemo);
}

/**
 * Edit memo
 */
function editMemoAPI(memo: IMemoState): IMemoState {
  const newList: IMemoState[] = getItem('list').map((m) => {
    if (m.memoId === memo.memoId) {
      return memo;
    }
    return m;
  });
  setItem('list', newList);
  return memo;
}
function* editMemo(action: editMemoAction) {
  const result: IMemoState = yield call(editMemoAPI, action.payload.memo);
  const memoId: number = result.memoId + 1;
  try {
    yield put({
      type: GET_MEMO_SUCCESS,
      payload: result,
    });
    yield put({
      type: RESET_EDIT,
      payload: {
        memoId,
      },
    });
  } catch (e) {
    console.error(e);
  }
}
function* watchEditMemo() {
  yield takeLatest(EDIT_MEMO, editMemo);
}

/**
 * Remove memo
 */
function removeMemoAPI(memoId: number): Promise<number> {
  return axios.delete(`/memo/api/memo/${memoId}`);
}
function* removeMemo(action: removeMemoAction) {
  const { memoId } = action.payload;
  yield call(removeMemoAPI, memoId);
  try {
    yield put({
      type: RESET_MEMO,
    });
    yield put({
      type: REMOVE_MEMO_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: REMOVE_MEMO_FAILURE,
    });
    console.error(e);
  }
}
function* watchRemoveMemo() {
  yield takeLatest(REMOVE_MEMO, removeMemo);
}

export default function* editSaga() {
  yield all([
    watchAddMemo(),
    watchEditMemo(),
    watchRemoveMemo(),
  ]);
}
