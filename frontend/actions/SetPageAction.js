export const setPage = (page) => {
    return (dispatch, getState) => {
        //console.log("INNI ACTION med page: ", page)
        dispatch({
            type: 'SET_PAGE', page
            
        })
    }
};