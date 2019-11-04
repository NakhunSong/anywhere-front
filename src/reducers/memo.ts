// action type
export const GET_MEMO = 'memo/GET_MEMO' as const;
export const GET_MEMO_SUCCESS = 'memo/GET_MEMO_SUCCESS' as const;
export const GET_MEMO_FAILURE = 'memo/GET_MEMO_FAILURE' as const;
export const RESET_MEMO = 'memo/RESET_MEMO' as const;

// action creator
const getMemo = (memoId: number) => {
  return {
    type: GET_MEMO,
    payload: {
      memoId,
    },
  };
};
const getMemoSuccess = (payload: IMemoState) => {
  return {
    type: GET_MEMO_SUCCESS,
    payload,
  };
};
const getMemoFailure = () => ({ type: GET_MEMO_FAILURE });
const resetMemo = () => {
  return {
    type: RESET_MEMO,
  };
};

export const actionCreators = {
  getMemo,
  getMemoSuccess,
  resetMemo,
};

export type getMemoAction = ReturnType<typeof getMemo>;
export type getMemoSuccessAction = ReturnType<typeof getMemoSuccess>;
export type getMemoFailureAction = ReturnType<typeof getMemoFailure>;
export type resetMemoAction = ReturnType<typeof resetMemo>;
export type MemoActions =
  | getMemoAction
  | getMemoSuccessAction
  | getMemoFailureAction
  | resetMemoAction;

// initial state
export interface IMemoState {
  memoId: number;
  title: string;
  content: string;
}

const initialState: IMemoState = {
  memoId: 0,
  title: '',
  content: '',
};

export default function reducer(state = initialState, action: MemoActions) {
  switch (action.type) {
    case GET_MEMO: {
      return {
        ...state,
      };
    }
    case GET_MEMO_SUCCESS: {
      const { payload } = action;
      if (payload) {
        return {
          memoId: payload.memoId,
          title: payload.title,
          content: payload.content,
        };
      }
      return {
        ...state,
      };
    }
    case GET_MEMO_FAILURE: {
      return {
        ...state,
      };
    }
    case RESET_MEMO: {
      return {
        memoId: 0,
        title: '',
        content: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
