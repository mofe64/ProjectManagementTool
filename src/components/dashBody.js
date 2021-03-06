import ProjectCard from './projectCard';
import MessageCard from './messageCard';
import TaskCard from './taskCard';
const tabCollection = {
    projects: [
        {
            title: 'Pentax Project 1',
            projectDesc: 'Porfolio Project for all members of the Cohort.',
            tags: ['React', 'Web', 'CSS', 'JavaScript', 'Ui/Ux'],
            progress:'COMPLETED',
            tasks: []
        },
        {
            title: 'Bank Of Lagos',
            projectDesc: 'A Fully Automated Digital Bank.',
            tags: ['Mobile', 'Fintech', 'Java', 'Android', 'IOS'],
            progress:'IN PROGRESS',

            tasks: []
        },
        {
            title: 'Nubari Insurance',
            projectDesc: 'Mobile Health Insurance Powered by Artificial Intelligence.',
            tags: ['Mobile', 'Web', 'InsureTech'],
            progress:'IN PROGRESS',
            tasks: [
                'Have you completed the refactoring ??',
                'Have you completed the refactoring ??',
                'Have you completed the refactoring ??',
                
            ]
        }
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
    ],
    tasks: [
        {
            completed: true,
            taskDesc: 'Complete Schema and db Design for proj'
        },
        {
            completed: false,
            taskDesc: 'Refactor Products container'
        },
        {
            completed: true,
            taskDesc: 'Uml system model for testProj'
        },
        {
            completed: false,
            taskDesc: 'testProj'
        }
    ]

}

const DashBody = ({ dashboardView=tabCollection  }) => 
    <div className='flex flex-wrap'>
        {dashboardView.projects.map((project, i) => 
            <ProjectCard key={i} project={ project}/>
        )}
        <MessageCard messages={ tabCollection.messages}/>
        <TaskCard tasks={tabCollection.tasks}/>
    </div>
    

export default DashBody;
