const initialValue = { report: "Report reducer is created dynamically" };

const reportsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_REPORT":
      return { ...state, report: action.payload };
    default:
      return state;
  }
};

export default reportsReducer;
