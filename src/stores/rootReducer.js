import { combineReducers } from "redux";

import adminReducer from "./admin/adminReducer";
import layoutReducer from "./layout/layoutReducer";
import messageReducer from "./message/messageReducer";
import pageReducer from "./page/pageReducer";

export default combineReducers({
  adminReducer,
  layoutReducer,
  messageReducer,
  pageReducer,
});
