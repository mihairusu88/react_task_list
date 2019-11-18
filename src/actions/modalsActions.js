export const openTaskModal = (modalContent) => {
    return {
        type: 'OPEN_TASK_MODAL',
        payload: {
            open: true,
            content: modalContent
        }
    }
}
export const closeTaskModal = () => {
    return {
        type: 'CLOSE_TASK_MODAL',
        payload: {
            open: false,
            content: {}
        }
    }
}