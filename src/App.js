import React, { Fragment } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./home";

function App(props) {
  return (
    <BrowserRouter>
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/records">
                Records{" "}
                <small>
                  (click here for one weird trick that will add dynamic reducer)
                </small>
              </Link>
            </li>
          </ul>
        </nav>

        <Route path="/home" component={Home} />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
