export const addFavourite = (fav) => {
    return (dispatch, getState) => {
        console.log("Favourite action")
        dispatch({
            type: 'ADD_FAVOURITE', fav
            
        })
    }
};