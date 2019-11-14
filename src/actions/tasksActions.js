import { status, priority } from './types';

export const loadTasks = () => {
    return {
        type: 'LOAD_TASKS',
        payload: [
            {
                id: 1,
                title: 'Measure load performance of the site',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.HIGH,
                status: status.BACKLOG,
            },
            {
                id: 2,
                title: 'Create a forum for our customers',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.MEDIUM,
                status: status.BACKLOG,
            },
            {
                id: 3,
                title: 'Load database with customers data',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.HIGH,
                status: status.BACKLOG,
            },
            {
                id: 4,
                title: 'Create newsletter template',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.LOW,
                status: status.BACKLOG,
            },
            {
                id: 5,
                title: 'Create Facebook page',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.LOW,
                status: status.TO_DO,
            },
            {
                id: 6,
                title: 'Company website is down',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.HIGH,
                status: status.TO_DO,
            },
            {
                id: 7,
                title: 'Load database with customers data',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.HIGH,
                status: status.TO_DO,
            },
            {
                id: 8,
                title: 'Allow users to upload avatars',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.MEDIUM,
                status: status.TO_DO,
            },
            {
                id: 9,
                title: 'Review security guidelines',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.HIGH,
                status: status.IN_PROGRESS,
            },
            {
                id: 10,
                title: 'Create an API for entire application',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.MEDIUM,
                status: status.IN_PROGRESS,
            },
            {
                id: 11,
                title: 'Fix design issues',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.HIGH,
                status: status.IN_PROGRESS,
            },
            {
                id: 12,
                title: 'Schedule and prepare application database',
                description: 'Lorem Ipsum Dolor sit a met.',
                priority: priority.MEDIUM,
                status: status.DONE,
            },
        ]
    }
}

export const addTask = (taskData) => {
    return {
        type: 'ADD_TASK',
        payload: taskData
    }
}

export const deleteTask = (taskId) => {
    return {
        type: 'DELETE_TASK',
        payload: taskId
    }
}