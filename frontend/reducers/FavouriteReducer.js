const initState = {
    favourite: "",
}

const favouriteReducer = (state = initState, action) => {
    switch(action.type) {        
        case 'ADD_FAVOURITE':
            console.log("Add-favourite-reducer")
            console.log(action.fav)
            return{ favourite: action.fav }
        case 'REMOVE_FAVOURITE':
            return { favourite: "" }
        default: return state;
    };
}

export default favouriteReducer;