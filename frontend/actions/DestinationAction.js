export const showDestination = (destinationID, visible) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SHOW_DESTINATION",
      destinationID
    });
  };
};
