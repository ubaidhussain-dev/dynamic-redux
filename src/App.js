import React, { Fragment } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./home";

function App(props) {
  return (
    <BrowserRouter>
      <Fragment>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/home">
            <p>HOME LINK - CLICK HERE</p>
          </Link>
        </h3>

        <Route exact path="/home">
          <Home store={props.store} />
        </Route>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
