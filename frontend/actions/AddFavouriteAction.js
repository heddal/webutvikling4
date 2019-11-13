export const addFavourite = (fav) => {
    return (dispatch, getState) => {
        console.log("Favourite action")
        console.log(fav)
        dispatch({
            type: 'ADD_FAVOURITE', fav
            
        })
    }
};