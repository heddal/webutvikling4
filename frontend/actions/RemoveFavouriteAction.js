export const addFavourite = () => {
    return (dispatch, getState) => {
        console.log("Favourite action remove")
        dispatch({
            type: 'REMOVE_FAVOURITE'
            
        })
    }
};