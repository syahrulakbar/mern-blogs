const initialStateHome = {
  dataBlogs: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  },
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_BLOGS") {
    return {
      ...state,
      dataBlogs: action.payload,
    };
  }
  if (action.type === "UPDATE_PAGE") {
    return {
      ...state,
      page: action.payload,
    };
  }
  return state;
};
export default homeReducer;
