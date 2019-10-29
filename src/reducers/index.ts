import { combineReducers } from 'redux';
import edit, { IEditState } from './edit';
import list, { IMemoListState } from './list';
import memo, { IMemoState } from './memo';

export interface IStoreState {
  edit: IEditState;
  list: IMemoListState;
  memo: IMemoState;
}

const rootReducer = combineReducers({
  edit,
  memo,
  list,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
