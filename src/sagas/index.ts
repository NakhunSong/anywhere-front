import { all, fork } from 'redux-saga/effects';

import edit from './edit';
import list from './list';
import memo from './memo';

export default function* rootSaga() {
  yield all([
    fork(edit),
    fork(list),
    fork(memo),
  ]);
}
