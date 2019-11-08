import sortReducers from './SortReducers';
import destinationReducer from './DestinationReducer';
import lengthReducer from './LengthReducer';
import filterReducer from './FilterReducer';
import { combineReducers } from 'redux';
import setPageReducer from './SetPageReducer';
import dropdownReducer from './DropdownReducer';


const rootReducer = combineReducers({
    filter: filterReducer,
    sort: sortReducers,
    destination: destinationReducer,
    length: lengthReducer,
    page: setPageReducer,
    dropdowns: dropdownReducer
});

export default rootReducer
