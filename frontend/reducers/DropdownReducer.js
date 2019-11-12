const initState = [
  {
    index: 0,
    menuName: "sort_by",
    options: ["None", "Popularity", "A - Z"]
  },
  {
    index: 2,
    menuName: "filter_by",
    options: ["MenuItem 1", "MenuItem 2", "MenuItem 3", "MenuItem 4"]
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
