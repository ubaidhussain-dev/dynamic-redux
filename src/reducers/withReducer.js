import React from "react";
import { object } from "prop-types";

export const withReducer = (key, reducer) => (WrappedComponent) => {
  const Extended = (props, context) => {
    console.log("MY_CONTEXT", context);
    context.store.injectReducer(key, reducer);
    return <WrappedComponent {...props} />;
  };

  Extended.contextTypes = {
    store: object,
  };

  return Extended;
};
