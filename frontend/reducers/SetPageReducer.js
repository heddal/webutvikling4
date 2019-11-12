const initState = {
    page: "",
}

const setPageReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_PAGE':
            //console.log("HALLABALA", action.page)
            return{page: action.page}
        default: return state;
    };
}

export default setPageReducer;