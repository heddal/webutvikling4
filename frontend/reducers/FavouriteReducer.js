const initState = {
  favourite: ""
};

const favouriteReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_FAVOURITE":
      return { favourite: action.fav };
    default:
      return state;
  }
};

export default favouriteReducer;
