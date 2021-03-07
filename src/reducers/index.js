import { combineReducers } from "redux";

const rootReducer = (asyncReducer) =>
  combineReducers({
    app: appReducer,
    ...asyncReducer,
  });

export default rootReducer;

const appReducer = (state = { mode: "LIGHT" }, action) => {
  switch (action.type) {
    case "OB1":
      return state;
    default:
      return state;
  }
};
