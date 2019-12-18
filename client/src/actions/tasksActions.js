import { status } from './types';
import { getAllTaskValues } from '../mock_values';

export const loadTasks = () => {
    const allTasks = getAllTaskValues();

    return {
        type: 'LOAD_TASKS',
        payload: allTasks
    }
}

export const addTask = (taskData) => {
    return {
        type: 'ADD_TASK',
        payload: taskData
    }
}

export const editTask = (taskData) => {
    return {
        type: 'EDIT_TASK',
        payload: taskData
    }
}

export const deleteTask = (taskId) => {
    return {
        type: 'DELETE_TASK',
        payload: taskId
    }
}

export const loadUserTasks = (userId) => {
    const allTasks = getAllTaskValues();
    const userTasks = [];
    allTasks.map(task => (task.assignedUsersId.includes(userId) === true && task.status === status.IN_PROGRESS) ? userTasks.push(task) : '');

    return {
        type: 'LOAD_USER_TASKS',
        payload: userTasks
    }
}