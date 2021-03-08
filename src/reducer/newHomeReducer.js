import { createSlice } from "@reduxjs/toolkit";

const homeReducer = createSlice({
  name: "home",
  initialState: { home: "This is home Reducer" },
  reducers: {
    getHome: (state) => {
      state = "apollo";
    },
  },
});

export const { getHome } = homeReducer.actions;

export default homeReducer.reducer;
