import { createSlice } from "@reduxjs/toolkit";

export const reportReducer = createSlice({
  name: "reports",
  initialState: { report: "This is Report Reducer" },
  reducers: {
    addReport: (state, action) => ({ ...state, report: action.payload }),
  },
});

export const { addReport } = reportReducer.actions;

export default reportReducer.reducer;
