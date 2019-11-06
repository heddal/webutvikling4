export const setData = (data) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_DATA', data
        })
    }
};