// action type
export const GET_MEMO = 'memo/GET_MEMO' as const;
export const GET_MEMO_SUCCESS = 'memo/GET_MEMO_SUCCESS' as const;
export const RESET_MEMO = 'memo/RESET_MEMO' as const;

// action creator
const getMemo = (id: number) => {
  return {
    type: GET_MEMO,
    payload: {
      id,
    },
  };
};
const getMemoSuccess = (payload: IMemoState) => {
  return {
    type: GET_MEMO_SUCCESS,
    payload,
  };
};
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

type MemoAction =
  | ReturnType<typeof getMemo>
  | ReturnType<typeof getMemoSuccess>
  | ReturnType<typeof resetMemo>;

// initial state
export interface IMemoState {
  id: number;
  title: string;
  content: string;
}

const initialState: IMemoState = {
  id: 0,
  title: '',
  content: '',
};

export default function reducer(state = initialState, action: MemoAction) {
  switch(action.type) {
    case GET_MEMO: {
      return {
        ...state,
      };
    }
    case GET_MEMO_SUCCESS: {
      const { payload } = action;
      if (payload) {
        return {
          id: payload.id,
          title: payload.title,
          content: payload.content,
        };
      }
      return {
        ...state,
      };
    }
    case RESET_MEMO: {
      return {
        id: 0,
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