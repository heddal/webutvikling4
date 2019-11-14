export const setFavourite = (fav) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_FAVOURITE', fav
            
        })
    }
};