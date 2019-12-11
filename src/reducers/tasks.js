const initialState = {
    tasks: []
}

const tasks = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case 'LOAD_TASKS':
            return {
                ...state,
                tasks: payload
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [payload, ...state.tasks]
            }
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === payload.id ? {
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
                tasks: state.tasks.filter(task => task.id !== payload)
            }
        case 'LOAD_USER_TASKS':
            return {
                ...state,
                tasks: payload
            }
        default:
            return state;
    }
}

export default tasks;

