import { getAllUsers } from '../mock_values';

export const loadUsers = () => {
    const allUsers = getAllUsers();

    return {
        type: 'LOAD_USERS',
        payload: allUsers
    }
}

export const loadUser = (userId) => {
    const allUsers = getAllUsers();
    const user = allUsers.filter(user => user.id === userId);

    return {
        type: 'LOAD_USER',
        payload: (user.length > 0) ? user : false
    }
}