import { combineReducers } from 'redux';
import groupsReducer from './groups';
import tasksReducer from './tasks';
import modalsReducer from './modals';
import usersReducer from './users';

const rootReducer = combineReducers({
    groups: groupsReducer,
    tasks: tasksReducer,
    modals: modalsReducer,
    users: usersReducer,
});

export default rootReducer;