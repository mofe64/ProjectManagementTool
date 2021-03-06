import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tag from './tag'
import '../css/tasks.css'
const TaskBody = ({ tasks = [] }) =>
    <div className='flex flex-col'>
        <div className='flex justify-between mt-5 mb-5'>
            <div></div>
            <div>
                <button className='bg-yellow-600 text-white pt-3 pb-3 pl-4 pr-4 rounded-xl'>
                    <FontAwesomeIcon icon={ faPlus}/>
                </button>
            </div>
        </div>
        <div>
            <table className='table-fixed bg-white w-full rounded-lg'>
                <thead>
                    <tr>
                        <th className=' flex justify-start pl-4 border-r-2 pt-2 pb-2'>Task Name</th>
                        <th className='w-2/6 border-r-2'> Task Tags</th>
                        <th className='w-1/6 border-r-2'>Project Name</th>
                        <th className='w-1/6 border-r-2'> Due Date</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div className='mt-2'>
            <table className='table-fixed bg-white w-full'>
                <thead>
                    <tr>
                        <th className=' flex justify-start pl-4 border-r-2 pt-2 pb-2'>
                            <h1>TO DO</h1>
                        </th>
                        <th className='w-2/6'></th>
                        <th className='w-1/6'></th>
                        <th className='w-1/6'> </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.filter(task => task.status === 'PENDING')
                        .map((task, i) =>
                            <tr key={i} className='pt-2 pb-2'>
                                <td className=' pl-4 pt-2 pb-2'>{task.name}</td> 
                                <td className='flex row pt-2 pb-2'>
                                    {task.tags.map((tag, i) =>
                                        <Tag key={i} tagname={ tag} />
                                    )}
                                </td>
                                <td className='pl-4 pt-2 pb2'>
                                    {task.project}
                                </td>
                                <td className='pl-4 pt-2 pb2'>
                                    {task.due}
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    </div>

export default TaskBody;