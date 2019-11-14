const initialState = {
    tasks: []
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TASKS':
            return {
                ...state,
                tasks: action.payload
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state;
    }
}

export default tasks;

