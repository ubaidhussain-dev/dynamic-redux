import React from "react";
import { useStore } from "react-redux";

export const withReducer = (key, reducer) => (Component) => {
  const WrappedComponent = (props) => {
    const store = useStore();
    console.log("MY STORE", store);

    store.injectReducer(key, reducer);

    return <Component {...props} />;
  };

  return WrappedComponent;
};
