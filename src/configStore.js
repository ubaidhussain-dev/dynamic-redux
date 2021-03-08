import { createStore } from "redux";
import rootReducer from "./reducer";

const initializeStore = () => {
  const store = createStore(
    rootReducer(),
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.asyncReducer = {};

  store.injectReducer = (key, reducer) => {
    store.asyncReducer[key] = reducer;
    store.replaceReducer(rootReducer(store.asyncReducer));
    return store;
  };

  return store;
};

export default initializeStore;
