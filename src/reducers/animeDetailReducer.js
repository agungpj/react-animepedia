const initState = {
  data: {},
  // image: {},
};

const animeDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        data: {
          ...state.data,
          [action.animeId]: action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default animeDetailReducer;
