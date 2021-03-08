import { configureStore, combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./reducer/newHomeReducer";
// import reportsReducer from "./reducer/newReportReducer";

const rootReducer = (asyncReducer) =>
  combineReducers({
    home: homeReducer,
    ...asyncReducer,
  });

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer(),
  });

  store.asyncReducer = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducer[key] = reducer;

    store.replaceReducer(rootReducer(store.asyncReducer));
    return store;
  };

  return store;
};
export default initializeStore;
