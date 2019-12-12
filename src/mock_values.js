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

export const getAllUsers = () => {
    return [
        {
            id: 1,
            name: 'John Doe',
            role: 'Web Developer',
            email: 'john.doe@example.com',
            phone: '+97 799 376-4681'
        },
        {
            id: 2,
            name: 'Jane Doe',
            role: 'Backend Developer',
            email: 'jane.doe@example.com',
            phone: '+91 791 321-4511'
        },
        {
            id: 3,
            name: 'John Smith',
            role: 'Project Manager',
            email: 'john.smith@example.com',
            phone: '+95 652 344-4521'
        },
        {
            id: 10,
            name: 'Anthony Doe',
            role: 'Frontend Developer',
            email: 'anthony.doe@example.com',
            phone: '+97 521 322-7551'
        },
        {
            id: 20,
            name: 'Bob Smith',
            role: 'Fullstack Developer',
            email: 'bob.smith@example.com',
            phone: '+96 533 332-6452'
        }
    ]
}