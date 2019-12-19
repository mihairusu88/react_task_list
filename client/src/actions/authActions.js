import { getAllUsers } from '../mock_values';

export const loadAuthUser = () => (dispatch) => {
    const allUsers = getAllUsers();

    dispatch({
        type: 'AUTH_USER_LOADED',
        payload: allUsers[0]
    });
}