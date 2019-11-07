export const setData = (data) => {
    return (dispatch, getState) => {
        console.log("INNI ACTION")
        dispatch({
            type: 'SET_DATA', data
            
        })
    }
};