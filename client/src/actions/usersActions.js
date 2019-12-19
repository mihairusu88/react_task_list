import { getAllUsers } from '../mock_values';

export const loadUsers = () => (dispatch) => {
    const allUsers = getAllUsers();
    dispatch({
        type: 'LOAD_USERS',
        payload: allUsers
    });
}

export const loadUser = (userId) => (dispatch) => {
    const allUsers = getAllUsers();
    const user = allUsers.filter(user => user.id === userId);

    dispatch({
        type: 'LOAD_USER',
        payload: (user.length > 0) ? user : false
    });
}