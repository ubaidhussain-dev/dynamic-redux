import React, { useState } from "react";
import { withReducer } from "../withReducer";
import reportsReducer from "../reducer/reportsReducer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Reports = () => {
  const report = useSelector((state) => state.reports.report);
  const dispatch = useDispatch();

  const [state, setState] = useState();

  return (
    <div>
      <h1>Reports</h1>
      <h3>{`Value of report ${report}`}</h3>

      <Link to="/">Home</Link>

      <input value={state} onChange={(e) => setState(e.target.value)} />
      <button onClick={() => dispatch({ type: "ADD_REPORT", payload: state })}>
        Update Report
      </button>
    </div>
  );
};

export default withReducer("reports", reportsReducer)(Reports);
