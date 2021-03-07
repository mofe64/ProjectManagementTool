import {useRef} from 'react'
const NewForm = ({onAddProject=f=>f}) => {
    const projectNameRef = useRef();
    const projectDescriptionRef = useRef();
    const projectTagsRef = useRef();
    const submit = e => {
        e.preventDefault();
        const projectName = projectNameRef.current.value;
        const projectDesc = projectDescriptionRef.current.value;
        const projectTags = projectTagsRef.current.value;
        const newProject = {
            id: 1,
            title: projectName,
            projectDesc: projectDesc,
            tags: projectTags.split(" "),
            progress: "WORKING"
        }
        onAddProject(newProject)
    }
   return( <div className='pl-5 pr-5 mt-10 bg-white flex flex-col'>
        <form className='w-1/2 ' onSubmit={submit}>
            <div className='flex flex-col pt-5 pb-5'>
                <label className='pl-3 font-bold'>Project NAME</label>
                <input ref={projectNameRef} type='text' className='rounded-xl' />
            </div>
            <div className='flex flex-col pt-5 pb-5'>
                <label className='pl-3 font-bold'>Project Description</label>
                <textarea ref={projectDescriptionRef} className='rounded-xl' />
            </div>
            <div className='flex flex-col pt-5 pb-5'>
                <label className='pl-3 font-bold'>Tags</label>
                <input  ref={projectTagsRef} type='text' className='rounded-xl' />
            </div>
           <button type='submit' className='bg-blue-600 p-2 mb-3 rounded-lg text-lg
             text-white font-bold outline-none border-none'>Create</button>
        </form>
    </div>)
}
export default NewForm;