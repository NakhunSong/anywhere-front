import { IMemoState } from './memo';

// actions
export const GET_MEMO_LIST = 'list/GET_MEMO_LIST' as const;
export const GET_MEMO_LIST_SUCCESS = 'list/GET_MEMO_LIST_SUCCESS' as const;
export const GET_MEMO_LIST_FAILURE = 'list/GET_MEMO_LIST_FAILURE' as const;

// action creators
const getMemoList = () => ({ type: GET_MEMO_LIST });
const getMemoListSuccess = (payload: IMemoState[]) => {
  return {
    type: GET_MEMO_LIST_SUCCESS,
    payload,
  };
};
const getMemoListFailure = () => {
  return {
    type: GET_MEMO_LIST_FAILURE,
  };
};

export const actionCreators = {
  getMemoList,
  getMemoListSuccess,
  getMemoListFailure,
};

export type ListActions =
  | ReturnType<typeof getMemoList>
  | ReturnType<typeof getMemoListSuccess>
  | ReturnType<typeof getMemoListFailure>;

// initial state
export interface IMemoListState {
  memoList: IMemoState[];
}

const initialState: IMemoListState = {
  memoList: [],
};

// reducer
export default function reducer(state = initialState, action: ListActions) {
  switch (action.type) {
    case GET_MEMO_LIST: {
      return {
        ...state,
      };
    }
    case GET_MEMO_LIST_SUCCESS: {
      return {
        memoList: action.payload,
      };
    }
    case GET_MEMO_LIST_FAILURE: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
