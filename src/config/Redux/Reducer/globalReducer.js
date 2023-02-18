const initialState = {
  name: "Mochamad Syahrul Akbar",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Programmer",
    };
  }
  return state;
};

export default globalReducer;
