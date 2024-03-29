import { createStore } from "redux";
import createReducer from "./reducers";

const initializeStore = () => {
  const store = createStore(
    createReducer(),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.asyncReducers = {};

  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};

export default initializeStore;
