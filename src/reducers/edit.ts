import { IMemoState } from './memo';

// action type
export const CHANGE_TITLE = 'edit/CHANGE_TITLE' as const;
export const CHANGE_CONTENT = 'edit/CHANGE_CONTENT' as const;
export const RESET_EDIT = 'edit/RESET_EDIT' as const;
export const GET_MEMO = 'edit/GET_MEMO' as const;
export const ADD_MEMO = 'edit/ADD_MEMO' as const;
export const EDIT_MEMO = 'edit/EDIT_MEMO' as const;
export const REMOVE_MEMO = 'edit/REMOVE_MEMO' as const;

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

const editMemo = (memo: IMemoState) => ({
  type: EDIT_MEMO,
  payload: {
    memo,
  },
});

const removeMemo = (id: number) => ({
  type: REMOVE_MEMO,
  payload: {
    id,
  },
});

export const actionCreators = {
  changeTitle,
  changeContent,
  resetEdit,
  getMemo,
  addMemo,
  editMemo,
  removeMemo,
};

type EditActions =
  | ReturnType<typeof changeTitle>
  | ReturnType<typeof changeContent>
  | ReturnType<typeof resetEdit>
  | ReturnType<typeof getMemo>
  | ReturnType<typeof addMemo>
  | ReturnType<typeof editMemo>
  | ReturnType<typeof removeMemo>;

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
    case EDIT_MEMO: {
      return {
        ...state,
      };
    }
    case REMOVE_MEMO: {
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
