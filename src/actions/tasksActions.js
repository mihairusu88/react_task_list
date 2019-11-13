export const loadTasks = () => {
    return {
        type: 'LOAD_TASKS',
        payload: [
            {
                id: 1,
                title: 'Measure load performance of the site',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 1,
                priority: 'High'
            },
            {
                id: 2,
                title: 'Create a forum for our customers',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 1,
                priority: 'Medium'
            },
            {
                id: 3,
                title: 'Load database with customers data',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 1,
                priority: 'High'
            },
            {
                id: 4,
                title: 'Create newsletter template',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 1,
                priority: 'Low'
            },
            {
                id: 5,
                title: 'Create Facebook page',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 2,
                priority: 'Low'
            },
            {
                id: 6,
                title: 'Company website is down',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 2,
                priority: 'High'
            },
            {
                id: 7,
                title: 'Load database with customers data',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 2,
                priority: 'High'
            },
            {
                id: 8,
                title: 'Allow users to upload avatars',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 2,
                priority: 'Medium'
            },
            {
                id: 9,
                title: 'Review security guidelines',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 3,
                priority: 'High'
            },
            {
                id: 10,
                title: 'Create an API for entire application',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 3,
                priority: 'Medium'
            },
            {
                id: 11,
                title: 'Fix design issues',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 3,
                priority: 'High'
            },
            {
                id: 12,
                title: 'Schedule and prepare application database',
                description: 'Lorem Ipsum Dolor sit a met.',
                groupId: 4,
                priority: 'Medium'
            },
        ]
    }
}