import React from "react";
import { withReducer } from "../withReducer";
import reportsReducer from "../reducer/reportsReducer";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div>
      <h1>Reports</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default withReducer("reports", reportsReducer)(Reports);
