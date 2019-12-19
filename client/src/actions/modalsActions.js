export const openTaskModal = (modalContent) => (dispatch) => {
    dispatch({
        type: 'OPEN_TASK_MODAL',
        payload: {
            open: true,
            content: modalContent
        }
    });
}
export const closeTaskModal = () => (dispatch) => {
    dispatch({
        type: 'CLOSE_TASK_MODAL',
        payload: {
            open: false,
            content: {}
        }
    });
}