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
            title: 'Nubari Insurance',
            projectDesc: 'Mobile Health Insurance Powered by Artificial Intelligence.',
            tags: ['Mobile', 'Web', 'InsureTech'],
            progress:'IN PROGRESS',
        }
    ],
    messages: [
           
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

const DashBody = ({ projects=[], messages=[], tasks=[] }) => 
    <div className='flex flex-wrap'>
        {projects.map((project, i) => 
            <ProjectCard key={i} project={ project}/>
        )}
        <MessageCard messages={ messages}/>
        <TaskCard tasks={tasks}/>
    </div>
    

export default DashBody;
