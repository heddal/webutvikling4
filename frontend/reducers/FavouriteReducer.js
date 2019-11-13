const initState = {
    favourite: "",
}

const favouriteReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_FAVOURITE':
            return{ favourite: action.favourite }
        case 'REMOVE_FAVOURITE':
            return { favourite: "" }
        default: return state;
    };
}

export default favouriteReducer;