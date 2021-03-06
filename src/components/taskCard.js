import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const TaskCard = ({ tasks = [] }) => 
    <div className='bg-white flex flex-col rounded-2xl mt-5 card p-5 mr-10 ' style={{ width: '30%' }}>
        <div>
            <h1 className='font-bold text-2xl mb-4'>My Tasks</h1>
            { console.log(tasks[0]) }
        </div>
        <div>
            {   
                (tasks.length === 0) ?
                    <div className='h-64 text-center'>
                        <p className='mt-20 font-medium text-xl'>
                            No Tasks Assigned...
                        </p>
                    </div> :
                    tasks.map((task, i) => 
                        <div className='mb-6 border-b-2 border-gray-300 flex text-xl pb-4' key={i}>
                            <p className='mr-6'>{i + 1}</p>
                            
                            {(!task.completed ?
                                <div className='flex justify-between w-full'>
                                    <p>{task.taskDesc}</p> 
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </div> :
                                <div className='flex justify-between w-full'>
                                    <p className='line-through'>{task.taskDesc}</p>
                                    <FontAwesomeIcon icon={faCheckCircle} className='bg-green-600 rounded-full'/>
                                </div>
                            )}
                                
                                
                           
                            
                        </div>
                    )
            }
        </div>
    </div>

export default TaskCard;