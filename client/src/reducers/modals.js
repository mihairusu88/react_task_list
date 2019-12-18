const initialState = {
    modals: {
        taskModal: {
            open: false,
            content: {}
        }
    }
}

const modals = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_TASK_MODAL':
            return {
                ...state,
                modals: {
                    taskModal: {
                        open: action.payload.open,
                        content: action.payload.content
                    }
                }
            }
        case 'CLOSE_TASK_MODAL':
            return {
                ...state,
                modals: {
                    taskModal: {
                        open: action.payload.open,
                        content: action.payload.content
                    }
                }
            }
        default:
            return state;
    }
}

export default modals;

