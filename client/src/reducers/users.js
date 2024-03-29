const initialState = {
    isLoading: true,
    users: []
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }
        case 'LOAD_USER':
            return {
                ...state,
                isLoading: false,
                users: (action.payload !== false) ? action.payload : []
            }
        default:
            return state;
    }
}

export default users;

