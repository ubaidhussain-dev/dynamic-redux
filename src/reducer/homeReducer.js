const homeReducer = (
  state = { home: "Home Reducer initial value" },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
