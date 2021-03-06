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
        name: 'build components',
        tags: ['React', 'Ui/Ux', 'Web'],
        project: 'Pentax',
        due: '27/03/2021',
        status: 'PENDING'
    }

]
const Tasks = () => 
    <div>
        <Header />
        <TaskBody tasks={ tasks}/>
    </div>

export default Tasks;