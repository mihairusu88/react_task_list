import axios from 'axios';

export const loadTasks = () => async (dispatch) => {
    try {
        dispatch({
            type: 'LOADING_TASKS',
        });
        const allTasksResult = await axios.get('/api/tasks');
        dispatch({
            type: 'LOAD_TASKS',
            payload: allTasksResult.data.tasks
        });
    } catch (error) {
        // @TO DO show an error message. 
    }
}

export const addTask = (taskData) => async (dispatch) => {
    const bodyValues = JSON.stringify(taskData);

    try {
        const createdTaskResult = await axios.post('/api/tasks', bodyValues, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch({
            type: 'ADD_TASK',
            payload: createdTaskResult.data
        });
    } catch (error) {
        // @TO DO show an error message. 
    }
}

export const editTask = (taskData) => async (dispatch) => {
    const bodyValues = JSON.stringify({
        title: taskData.title,
        description: taskData.description,
        priority: taskData.priority,
        status: taskData.status,
        assignedUsersId: taskData.assignedUsersId
    });

    try {
        const editedTaskResult = await axios.put(`/api/tasks/${taskData._id}`, bodyValues, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        dispatch({
            type: 'EDIT_TASK',
            payload: editedTaskResult.data
        });
    } catch (error) {
        // @TO DO show an error message. 
    }
}

export const deleteTask = (taskId) => async (dispatch) => {
    try {
        const deletedTaskResult = await axios.delete(`/api/tasks/${taskId}`);

        dispatch({
            type: 'DELETE_TASK',
            payload: deletedTaskResult.data._id
        });
    } catch (error) {
        // @TO DO show an error message. 
    }
}

export const loadUserTasks = (userId) => async (dispatch) => {
    dispatch({
        type: 'LOADING_USER_TASKS',
    });

    try {
        const userTasksResult = await axios.get(`/api/tasks/user/${userId}`);

        dispatch({
            type: 'LOAD_USER_TASKS',
            payload: userTasksResult.data.tasks
        });
    } catch (error) {
        // @TO DO show an error message. 
    }
}