const initialState = {
    isAuth: false,
    user: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_USER_LOADED':
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        default:
            return state;
    }
}

export default auth;

