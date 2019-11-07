const initState = {
    page: "",
}

const setPageReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_PAGE':
            return{page: action.page}
        default: return state;
    };
}

export default setPageReducer;