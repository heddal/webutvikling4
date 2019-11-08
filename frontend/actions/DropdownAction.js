export const changeSelected = (menuName, index) => {
  return (dispatch, getState) => {
    dispatch({
      type: "CHANGE_SELECTED",
      action: {
        menuName,
        index
      }
    });
  };
};
