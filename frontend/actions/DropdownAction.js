<<<<<<< HEAD
export const changeSelected = (index, menuName) => {
  return (dispatch, getState) => {
    dispatch({
      type: "CHANGE_SELECTED",
      index,
      menuName
=======
export const changeSelected = (menuName, index) => {
  return (dispatch, getState) => {
    console.log("inni CHANGE_SELECTED-----------------------");
    dispatch({
      type: "CHANGE_SELECTED",
      action: {
        menuName,
        index
      }
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
    });
  };
};
