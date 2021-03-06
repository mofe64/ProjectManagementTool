import Header from '../components/header';
import TaskBody from '../components/tasksBody'
const tasks = [
    {
        name: 'build components',
        tags: ['React', 'Ui/Ux', 'Web'],
        project: 'Pentax',
        due: '27/03/2021',
        status: 'PENDING'
    },
    {
        name: 'Optimize DB',
        tags: ['MongoDB', 'Databases', 'Mongo'],
        project: 'Products',
        due: '27/03/2021',
        status: 'PENDING'
    },
    {
        name: 'Analyze Data',
        tags: ['React', 'Web'],
        project: 'Pentax',
        due: '27/03/2021',
        status: 'IN PROGRESS'
    },
    {
        name: 'Refactor nubari codebase',
        tags: ['React', 'Ui/Ux', 'Web'],
        project: 'Pentax',
        due: '27/03/2021',
        status: 'IN PROGRESS'
    },
    {
        name: 'Test functions',
        tags: ['Jest', 'JUnit', 'Web'],
        project: 'Pentax',
        due: '27/03/2021',
        status: 'IN PROGRESS'
    },
    {
        name: 'Build First Components',
        tags: ['React', 'Ui/Ux', 'Web'],
        project: 'INSURE TECH',
        due: '27/03/2021',
        status: 'IN REVIEW'
    },
    {
        name: 'SOME STUFF',
        tags: ['React', 'Java', 'SpringBoot'],
        project: 'INSURE TECH',
        due: '27/03/2021',
        status: 'IN REVIEW'
    }

]
const Tasks = () => 
    <div>
        <Header />
        <TaskBody tasks={ tasks}/>
    </div>

export default Tasks;