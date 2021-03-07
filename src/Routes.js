import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import App from "./App";

const Routes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route to="*">
          <h1>NO PAGE FOUND</h1>
        </Route>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
