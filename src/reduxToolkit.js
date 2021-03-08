import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducer/newHomeReducer";
import reportsReducer from "./reducer/newReportReducer";

export default configureStore({
  reducer: {
    home: homeReducer,
    reports: reportsReducer,
  },
});
