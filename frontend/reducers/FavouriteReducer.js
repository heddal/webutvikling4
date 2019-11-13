const initState = {
    favourite: "",
}

const favouriteReducer = (state = initState, action) => {
    switch(action.type) {        
        case 'SET_FAVOURITE':
            console.log("SET-favourite-reducer")
            console.log(action.fav)
            return{ favourite: action.fav }
        default: return state;
    };
}

export default favouriteReducer;