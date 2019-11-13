export const setFavourite = (fav) => {
    return (dispatch, getState) => {
        console.log("Favourite action")
        console.log(fav)
        dispatch({
            type: 'SET_FAVOURITE', fav
            
        })
    }
};