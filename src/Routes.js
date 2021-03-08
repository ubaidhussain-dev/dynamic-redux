import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Reports from "./views/Reports";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <>
                <h1>Home</h1> <Link to="/report">Reports</Link>
              </>
            )}
          />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/report" component={Reports} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
