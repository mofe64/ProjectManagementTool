export const initialState = {
    projects: [
        {
        title: 'Pentax Project 1',
        projectDesc: 'Porfolio Project for all members of the Cohort.',
        tags: ['React', 'Web', 'CSS', 'JavaScript', 'Ui/Ux'],
        progress:'COMPLETED',
        },
        {
        title: 'Nubari Insurance',
        projectDesc: 'Mobile Health Insurance Powered by AI.',
        tags: ['Mobile', 'Web', 'InsureTech'],
        progress:'WORKING',
        },
        {
            title: 'Bank Of Lagos',
            projectDesc: 'A Fully Automated Digital Bank.',
            tags: ['Mobile', 'Fintech', 'Java', 'Android', 'IOS'],
            progress:'IN PROGRESS',
            tasks: []
        },
    ],
    tasks: [
    {
        name: 'build components',
        tags: ['React', 'Ui/Ux', 'Web'],
        project: 'Pentax',
        due: '27/03/2021',
        status: 'PENDING',
        completed: true
    },
    {
        name: 'Optimize DB',
        tags: ['MongoDB', 'Databases', 'Mongo'],
        project: 'Products',
        due: '27/03/2021',
        status: 'PENDING',
        completed: true
    },
    {
        name: 'Test functions',
        tags: ['Jest', 'JUnit', 'Web'],
        project: 'Pentax',
        due: '27/03/2021',
        status: 'IN PROGRESS',
        completed: false
    },
    {
        name: 'Build First Components',
        tags: ['React', 'Ui/Ux', 'Web'],
        project: 'INSURE TECH',
        due: '27/03/2021',
        status: 'IN REVIEW',
        completed: true
    },
    ],
    messages: [
        {
            name: 'Eyimofe',
            messageHeader: 'Have you completed the refactoring ??'
        },
        {
            name: 'Onyi',
            messageHeader: 'Just Made a pull request have you ...'
        },
        {
            name: 'Oracle',
            messageHeader: 'How far with the Uml diagram ?'
        }
    ]
}