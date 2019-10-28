import { combineReducers } from "redux";
import edit from "./edit";
import memo from "./memo";
import list from "./list";

const rootReducer = combineReducers({
  edit,
  memo,
  list,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
