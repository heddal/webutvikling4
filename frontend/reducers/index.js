import sortReducers from './SortReducers';
import destinationReducer from './DestinationReducer';
import lengthReducer from './LengthReducer';
import filterReducer from './FilterReducer';
import { combineReducers } from 'redux';
import setDataReducer from './SetDataReducer';


const rootReducer = combineReducers({
    filter: filterReducer,
    sort: sortReducers,
    destination: destinationReducer,
    length: lengthReducer,
    data: setDataReducer
});

export default rootReducer