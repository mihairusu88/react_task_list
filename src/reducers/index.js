import { combineReducers } from 'redux';
import groupsReducer from './groups';
import tasksReducer from './tasks';
import modalsReducer from './modals';

const rootReducer = combineReducers({
    groups: groupsReducer,
    tasks: tasksReducer,
    modals: modalsReducer,
});

export default rootReducer;