const initialState = {
    isLoading: true,
    tasks: []
}

const tasks = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case 'LOADING_TASKS':
            return {
                ...state,
                isLoading: true,
            }
        case 'LOAD_TASKS':
            return {
                ...state,
                isLoading: false,
                tasks: payload,
            }
        case 'ADD_TASK':
            return {
                ...state,
                isLoading: false,
                tasks: [payload, ...state.tasks],
            }
        case 'EDIT_TASK':
            return {
                ...state,
                isLoading: false,
                tasks: state.tasks.map(task =>
                    task._id === payload._id ? {
                        ...task,
                        title: payload.title,
                        description: payload.description,
                        priority: payload.priority,
                        status: payload.status
                    } : task
                )
            }
        case 'DELETE_TASK':
            return {
                ...state,
                isLoading: false,
                tasks: state.tasks.filter(task => task._id !== payload)
            }
        case 'LOADING_USER_TASKS':
            return {
                ...state,
                isLoading: true,
            }
        case 'LOAD_USER_TASKS':
            return {
                ...state,
                isLoading: false,
                tasks: payload
            }
        default:
            return state;
    }
}

export default tasks;

