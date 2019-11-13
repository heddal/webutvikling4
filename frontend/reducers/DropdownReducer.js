const initState = [
  {
    index: 0,
    menuName: "sort_by",
<<<<<<< HEAD
    options: ["None", "Popularity", "A - Z"]
=======
    options: ["Popularity", "A - Z"]
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
  },
  {
    index: 2,
    menuName: "filter_by",
    options: ["MenuItem 1", "MenuItem 2", "MenuItem 3", "MenuItem 4"]
  }
];

const dropdownReducer = (state = initState, action) => {
  const getMenuIndexByName = menuName =>
<<<<<<< HEAD
    state.findIndex(menuItem => menuItem.menuName == menuName);
  switch (action.type) {
    case "CHANGE_SELECTED":
      const chosenIndex = getMenuIndexByName(action.menuName);
      state[getMenuIndexByName(action.menuName)].index = action.index;
      return state;

=======
    state.dropdowns.findIndex(menuItem => menuItem.menuName == menuName);

  switch (action.type) {
    case "CHANGE_SELECTED":
      const dropdowns = state.dropdowns;
      dropdowns[getMenuIndexByName(action.menuName)].index = action.index;
      return {
        ...state,
        dropdowns
      };
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
    default:
      return state;
  }
};

export default dropdownReducer;
