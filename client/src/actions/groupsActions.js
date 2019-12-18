import { status } from './types';

export const loadGroups = () => {
    return {
        type: 'LOAD_GROUPS',
        payload: [
            {
                id: 1,
                title: 'Backlog',
                status: status.BACKLOG,
            },
            {
                id: 2,
                title: 'To Do',
                status: status.TO_DO,
            },
            {
                id: 3,
                title: 'In Progress',
                status: status.IN_PROGRESS,
            },
            {
                id: 4,
                title: 'Done',
                status: status.DONE,
            },
        ]
    }
}