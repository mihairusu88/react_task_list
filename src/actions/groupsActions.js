export const loadGroups = () => {
    return {
        type: 'LOAD_GROUPS',
        payload: [
            {
                id: 1,
                title: 'Backlog',
            },
            {
                id: 2,
                title: 'To Do',
            },
            {
                id: 3,
                title: 'In Progress',
            },
            {
                id: 4,
                title: 'Done',
            },
        ]
    }
}