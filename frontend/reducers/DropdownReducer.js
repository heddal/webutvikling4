const initState = [
  {
    index: 0,
    menuName: "Sort",
    options: ["None", "Popularity", "A-Z"]
  },
  {
    index: 2,
    menuName: "Continent",
    options: ["All", "Africa", "America", "Asia", "Europe", "Oceania"]
  }
];

const dropdownReducer = (state = initState, action) => {
  const getMenuIndexByName = menuName =>
    state.findIndex(menuItem => menuItem.menuName == menuName);
  switch (action.type) {
    case "CHANGE_SELECTED":
      const chosenIndex = getMenuIndexByName(action.menuName);
      state[getMenuIndexByName(action.menuName)].index = action.index;
      return state;
    default:
      return state;
  }
};

export default dropdownReducer;
