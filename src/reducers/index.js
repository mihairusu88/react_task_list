import { combineReducers } from 'redux';
import groupsReducer from './groups';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
    groups: groupsReducer,
    tasks: tasksReducer
});

export default rootReducer;