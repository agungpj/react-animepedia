const initState = {
  loading: false,
  datsa: [],
  errorMsg: "",
  toplist: [],
  adventure: [],
  comedy: [],
  demons: [],
  searched: [],
  // count: 0,
};

const AnimeListReducer = (state = initState, action) => {
  switch (action.type) {
    case "ANIME_LIST_LOAD":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "ANIME_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get anime",
      };
    case "ANIME_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        // datsa: action.payload.top,
        toplist: action.payload.toplist,
        adventure: action.payload.adventure,
        comedy: action.payload.comedy,
        demons: action.payload.demons,
        errorMsg: "",
      };
    case "ANIME_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return state;
  }
};

export default AnimeListReducer;
