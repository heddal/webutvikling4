const initState = {
    data: [],
}

const setDataReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_DATA':
            return{data: action.data}
        default: return state;
    };
}

export default setDataReducer;