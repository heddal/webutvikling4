export const changeSelected = (menuName, index) => {
  return (dispatch, getState) => {
    console.log("inni CHANGE_SELECTED-----------------------");
    dispatch({
      type: "CHANGE_SELECTED",
      action: {
        menuName,
        index
      }
    });
  };
};
