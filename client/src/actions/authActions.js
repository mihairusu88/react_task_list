import { getAllUsers } from '../mock_values';

export const loadAuthUser = () => {
    const allUsers = getAllUsers();

    return {
        type: 'AUTH_USER_LOADED',
        payload: allUsers[0]
    }
}