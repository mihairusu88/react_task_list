import { status, priority } from './actions/types';

export const getAllTaskValues = () => {
    return [
        {
            id: 1,
            title: 'Measure load performance of the site',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.HIGH,
            status: status.BACKLOG,
            assignedUsersId: [1, 3, 10]
        },
        {
            id: 2,
            title: 'Create a forum for our customers',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.MEDIUM,
            status: status.BACKLOG,
            assignedUsersId: [1, 3, 10, 20]
        },
        {
            id: 3,
            title: 'Load database with customers data',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.HIGH,
            status: status.BACKLOG,
            assignedUsersId: [1, 2, 3]
        },
        {
            id: 4,
            title: 'Create newsletter template',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.LOW,
            status: status.BACKLOG,
            assignedUsersId: [10, 20]
        },
        {
            id: 5,
            title: 'Create Facebook page',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.LOW,
            status: status.TO_DO,
            assignedUsersId: [2, 3, 10, 20]
        },
        {
            id: 6,
            title: 'Company website is down',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.HIGH,
            status: status.TO_DO,
            assignedUsersId: [1, 2]
        },
        {
            id: 7,
            title: 'Load database with customers data',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.HIGH,
            status: status.TO_DO,
            assignedUsersId: [1, 10]
        },
        {
            id: 8,
            title: 'Allow users to upload avatars',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.MEDIUM,
            status: status.TO_DO,
            assignedUsersId: [2, 10]
        },
        {
            id: 9,
            title: 'Review security guidelines',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.HIGH,
            status: status.IN_PROGRESS,
            assignedUsersId: [1, 3, 10]
        },
        {
            id: 10,
            title: 'Create an API for entire application',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.MEDIUM,
            status: status.IN_PROGRESS,
            assignedUsersId: [1, 3, 20]
        },
        {
            id: 11,
            title: 'Fix design issues',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.HIGH,
            status: status.IN_PROGRESS,
            assignedUsersId: [1, 2, 3]
        },
        {
            id: 12,
            title: 'Schedule and prepare application database',
            description: 'Lorem Ipsum Dolor sit a met.',
            priority: priority.MEDIUM,
            status: status.DONE,
            assignedUsersId: [1, 2]
        },
    ]
}