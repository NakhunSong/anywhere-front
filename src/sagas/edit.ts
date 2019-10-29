import { all, put, call, takeLatest } from 'redux-saga/effects';
import { ADD_MEMO, RESET_EDIT, EDIT_MEMO, REMOVE_MEMO, addMemoAction, editMemoAction, removeMemoAction } from 'reducers/edit';
import { GET_MEMO_SUCCESS, RESET_MEMO, IMemoState } from 'reducers/memo';
import { getItem, setItem, pushItem, getNextId } from 'lib/utils/LocalStorage';

/**
 * Add memo
 */
function addMemoAPI(memo: IMemoState): IMemoState {
  pushItem('list', memo);
  return memo;
}
function* addMemo(action: addMemoAction) {
  try {
    const result: IMemoState = yield call(addMemoAPI, action.payload.memo);
    const id: number = result.id + 1;
    yield put({
      type: GET_MEMO_SUCCESS,
      payload: result,
    });
    yield put({
      type: RESET_EDIT,
      payload: {
        id,
      },
    });
  } catch (e) {
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
    if (m.id === memo.id) {
      return memo;
    }
    return m;
  });
  setItem('list', newList);
  return memo;
}
function* editMemo(action: editMemoAction) {
  const result: IMemoState = yield call(editMemoAPI, action.payload.memo);
  const id: number = result.id + 1;
  try {
    yield put({
      type: GET_MEMO_SUCCESS,
      payload: result,
    });
    yield put({
      type: RESET_EDIT,
      payload: {
        id,
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
function removeMemoAPI(memoId: number): void {
  const list: IMemoState[] = getItem('list').filter((l) => l.id !== memoId);
  setItem('list', list);
}
function* removeMemo(action: removeMemoAction) {
  const id: number = getNextId('list');
  yield call(removeMemoAPI, action.payload.id);
  try {
    yield put({
      type: RESET_EDIT,
      payload: {
        id,
      },
    });
    yield put({
      type: RESET_MEMO,
    });
  } catch (e) {
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
