import React from "react";
import { object } from "prop-types";
import { ReactReduxContext } from "react-redux";

const withReducer = (key, reducer) => (WrappedComponent) => {
  const Extended = (props) => {
    console.log("ReactReduxContext", ReactReduxContext);
    return (
      <>
        <ReactReduxContext.Consumer>
          {({ store }) => {
            store.injectReducer(key, reducer);
          }}
        </ReactReduxContext.Consumer>
        <WrappedComponent {...props} />
      </>
    );
  };

  Extended.contextTypes = {
    store: object,
  };

  return Extended;
};

export default withReducer;
