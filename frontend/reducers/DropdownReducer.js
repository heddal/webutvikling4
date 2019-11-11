const initState = [
  {
    index: 0,
    menuName: "sort_by",
    options: ["Popularity", "A - Z"]
  },
  {
    index: 0,
    menuName: "filter_by",
    options: ["MenuItem 1", "MenuItem 2", "MenuItem 3", "MenuItem 4"]
  }
];

const dropdownReducer = (state = initState, action) => {
  const getMenuIndexByName = menuName =>
    state.dropdowns.findIndex(menuItem => menuItem.menuName == menuName);

  switch (action.type) {
    case "CHANGE_SELECTED":
      const dropdowns = state.dropdowns;
      dropdowns[getMenuIndexByName(action.menuName)].index = action.index;
      return {
        ...state,
        dropdowns
      };
    default:
      return state;
  }
};

export default dropdownReducer;
