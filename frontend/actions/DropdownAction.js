export const changeSelected = (index, menuName) => {
  return (dispatch, getState) => {
    dispatch({
      type: "CHANGE_SELECTED",
      index,
      menuName
    });
  };
};
