import { IMemoState } from './memo';

// action type
export const CHANGE_TITLE = 'edit/CHANGE_TITLE' as const;
export const CHANGE_CONTENT = 'edit/CHANGE_CONTENT' as const;
export const RESET_EDIT = 'edit/RESET_EDIT' as const;
export const GET_MEMO = 'edit/GET_MEMO' as const;
export const ADD_MEMO = 'edit/ADD_MEMO' as const;
export const ADD_MEMO_SUCCESS = 'edit/ADD_MEMO_SUCCESS' as const;
export const ADD_MEMO_FAILURE = 'edit/ADD_MEMO_FAILURE' as const;
export const EDIT_MEMO = 'edit/EDIT_MEMO' as const;
export const EDIT_MEMO_SUCCESS = 'edit/EDIT_MEMO_SUCCESS' as const;
export const EDIT_MEMO_FAILURE = 'edit/EDIT_MEMO_FAILURE' as const;
export const REMOVE_MEMO = 'edit/REMOVE_MEMO' as const;
export const REMOVE_MEMO_SUCCESS = 'edit/REMOVE_MEMO_SUCCESS' as const;
export const REMOVE_MEMO_FAILURE = 'edit/REMOVE_MEMO_FAILURE' as const;

// action creator
const changeTitle = (title: string) => ({
  type: CHANGE_TITLE,
  payload: {
    title,
  },
});

const changeContent = (content: string) => ({
  type: CHANGE_CONTENT,
  payload: {
    content,
  },
});

const resetEdit = (id: number) => ({
  type: RESET_EDIT,
  payload: {
    id,
  },
});

const getMemo = (memo: IEditState) => ({
  type: GET_MEMO,
  payload: {
    memo,
  },
});

const addMemo = (memo: IMemoState) => ({
  type: ADD_MEMO,
  payload: {
    memo,
  },
});
const addMemoSuccess = () => ({ type: ADD_MEMO_SUCCESS });
const addMemoFailure = () => ({ type: ADD_MEMO_FAILURE });
const editMemo = (memo: IMemoState) => ({
  type: EDIT_MEMO,
  payload: {
    memo,
  },
});
const editMemoSuccess = () => ({ type: EDIT_MEMO_SUCCESS });
const editMemoFailure = () => ({ type: EDIT_MEMO_FAILURE });
const removeMemo = (id: number) => ({
  type: REMOVE_MEMO,
  payload: {
    id,
  },
});
const removeMemoSuccess = () => ({ type: REMOVE_MEMO_SUCCESS });
const removeMemoFailure = () => ({ type: REMOVE_MEMO_FAILURE });
export const actionCreators = {
  changeTitle,
  changeContent,
  resetEdit,
  getMemo,
  addMemo,
  addMemoSuccess,
  addMemoFailure,
  editMemo,
  editMemoSuccess,
  editMemoFailure,
  removeMemo,
  removeMemoSuccess,
  removeMemoFailure,
};

export type changeTitleAction = ReturnType<typeof changeTitle>;
export type changeContentAction = ReturnType<typeof changeContent>;
export type resetEditAction = ReturnType<typeof resetEdit>;
export type getMemoAction = ReturnType<typeof getMemo>;
export type addMemoAction = ReturnType<typeof addMemo>;
export type addMemoSuccessAction = ReturnType<typeof addMemoSuccess>;
export type addMemoFailureAction = ReturnType<typeof addMemoFailure>;
export type editMemoAction = ReturnType<typeof editMemo>;
export type editMemoSuccessAction = ReturnType<typeof editMemoSuccess>;
export type editMemoFailureAction = ReturnType<typeof editMemoFailure>;
export type removeMemoAction = ReturnType<typeof removeMemo>;
export type removeMemoSuccessAction = ReturnType<typeof removeMemoSuccess>;
export type removeMemoFailureAction = ReturnType<typeof removeMemoFailure>;
type EditActions =
  | changeTitleAction
  | changeContentAction
  | resetEditAction
  | getMemoAction
  | addMemoAction
  | addMemoSuccessAction
  | addMemoFailureAction
  | editMemoAction
  | editMemoSuccessAction
  | editMemoFailureAction
  | removeMemoAction
  | removeMemoSuccessAction
  | removeMemoFailureAction;

// initial state
export interface IEditState {
  id: number;
  title: string;
  content: string;
  isModify: boolean;
}

const initialState: IEditState = {
  id: 0,
  title: "",
  content: "",
  isModify: false,
};

export default function reducer(state = initialState, action: EditActions) {
  switch (action.type) {
    case CHANGE_TITLE: {
      return {
        ...state,
        title: action.payload.title,
      };
    }
    case CHANGE_CONTENT: {
      return {
        ...state,
        content: action.payload.content,
      };
    }
    case RESET_EDIT: {
      return {
        id: action.payload.id,
        title: "",
        content: "",
        isModify: false,
      };
    }
    case GET_MEMO: {
      return {
        id: action.payload.memo.id,
        title: action.payload.memo.title,
        content: action.payload.memo.content,
        isModify: action.payload.memo.isModify,
      };
    }
    case ADD_MEMO: {
      return {
        ...state,
      };
    }
    case ADD_MEMO_SUCCESS: {
      return {
        ...state,
      };
    }
    case ADD_MEMO_FAILURE: {
      return {
        ...state,
      };
    }
    case EDIT_MEMO: {
      return {
        ...state,
      };
    }
    case EDIT_MEMO_SUCCESS: {
      return {
        ...state,
      };
    }
    case EDIT_MEMO_FAILURE: {
      return {
        ...state,
      };
    }
    case REMOVE_MEMO: {
      return {
        ...state,
      };
    }
    case REMOVE_MEMO_SUCCESS: {
      return {
        ...state,
      };
    }
    case REMOVE_MEMO_FAILURE: {
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
