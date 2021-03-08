import { combineReducers } from "redux";
import homeReducer from "./homeReducer";

const rootReducer = (asyncReducer) =>
  combineReducers({
    homeReducer,
    ...asyncReducer,
  });

export default rootReducer;
