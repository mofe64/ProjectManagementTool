import { useRef } from 'react';
import { withRouter } from 'react-router-dom';
const taskForm = withRouter(({history,onAddProject=f=>f}) => {
    const taskNameRef = useRef();
    const projectNameRef = useRef();
    const taskTagsRef = useRef();
    const taskDueDateRef = useRef();
    const submit = e => {
        e.preventDefault();
        const taskName = taskNameRef.current.value;
        const projectName = projectNameRef.current.value;
        const taskTags = taskTagsRef.current.value;
        const taskDueDate = taskDueDateRef.current.value;
        const newTask = {
            id: 1,
            name: taskName,
            project: projectName,
            tags: taskTags.split(" "),
            due:taskDueDate,
            status: "PENDING",
            completed: false
        }
        //TODO ADD DISPATCHMETHOD
        history.push('/')
    }
   return( <div className='pl-5 pr-5 mt-10 bg-white flex flex-col'>
        <form className='w-1/2 ' onSubmit={submit}>
            <div className='flex flex-col pt-5 pb-5'>
                <label className='pl-3 font-bold'>Task Name</label>
                <input ref={taskNameRef} type='text' className='rounded-xl' />
            </div>
            <div className='flex flex-col pt-5 pb-5'>
                <label className='pl-3 font-bold'>Project Name</label>
                <textarea ref={projectNameRef} className='rounded-xl' />
            </div>
            <div className='flex flex-col pt-5 pb-5'>
                <label className='pl-3 font-bold'>Tags</label>
                <input  ref={taskTagsRef} type='text' className='rounded-xl' />
           </div>
            <div className='flex flex-col pt-5 pb-5'>
                <label className='pl-3 font-bold'>Due Date</label>
                <input  ref={taskDueDateRef} type='text' className='rounded-xl' />
            </div>
           <button type='submit' className='bg-blue-600 p-2 mb-3 rounded-lg text-lg
             text-white font-bold outline-none border-none'>Create</button>
        </form>
    </div>)
})
export default taskForm;