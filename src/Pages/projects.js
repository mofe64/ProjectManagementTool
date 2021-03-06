import Header from '../components/header';
import ProjectBody from '../components/projectBody';
const projects =  [
    {
        title: 'Pentax Project 1',
        projectDesc: 'Porfolio Project for all members of the Cohort.',
        tags: ['React', 'Web', 'CSS', 'JavaScript', 'Ui/Ux'],
        progress:'COMPLETED',
    },
        {
        title: 'Pentax Project 1',
        projectDesc: 'Porfolio Project for all members of the Cohort.',
        tags: ['React', 'Web', 'CSS', 'JavaScript', 'Ui/Ux'],
        progress:'COMPLETED',
    },
    {
        title: 'Pentax Project 1',
        projectDesc: 'Porfolio Project for all members of the Cohort.',
        tags: ['React', 'Web', 'CSS', 'JavaScript', 'Ui/Ux'],
        progress:'COMPLETED',
    },
    {
        title: 'Bank Of Lagos',
        projectDesc: 'A Fully Automated Digital Bank.',
        tags: ['Mobile', 'Fintech', 'Java', 'Android', 'IOS'],
        progress:'IN REVIEW',
    },
        {
        title: 'Bank Of Lagos',
        projectDesc: 'A Fully Automated Digital Bank.',
        tags: ['Mobile', 'Fintech', 'Java', 'Android', 'IOS'],
        progress:'IN REVIEW',
    },
    {
        title: 'Bank Of Lagos',
        projectDesc: 'A Fully Automated Digital Bank.',
        tags: ['Mobile', 'Fintech', 'Java', 'Android', 'IOS'],
        progress:'IN REVIEW',
    },
    {
        title: 'Nubari Insurance',
        projectDesc: 'Mobile Health Insurance Powered by AI.',
        tags: ['Mobile', 'Web', 'InsureTech'],
        progress:'WORKING',
    },
      {
        title: 'Nubari Insurance',
        projectDesc: 'Mobile Health Insurance Powered by AI.',
        tags: ['Mobile', 'Web', 'InsureTech'],
        progress:'WORKING',
    },
    {
        title: 'Nubari Insurance',
        projectDesc: 'Mobile Health Insurance Powered by AI.',
        tags: ['Mobile', 'Web', 'InsureTech'],
        progress:'WORKING',
    }
]
const Projects = () => 
    <div className='flex flex-col'>
        <Header />
        <ProjectBody projects={ projects}/>
    </div>

export default Projects;