const initialState = {
    groups: []
}

const groups = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_GROUPS':
            return {
                ...state,
                groups: action.payload
            }
        default:
            return state;
    }
}

export default groups;

