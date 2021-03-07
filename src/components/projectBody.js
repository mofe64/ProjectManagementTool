import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModProjectCard from '../components/modProjectCard';
import {withRouter} from 'react-router-dom'
const ProjectBody = withRouter(({ history, projects = [] }) => (
        <div className='flex flex-col'>
        <div className='flex justify-between mt-5 mb-5'>
            <div></div>
            <div>
                <button className='bg-yellow-600 text-white pt-3 pb-3 pl-4 pr-4 rounded-xl'
                onClick={()=> {history.push('/newProject')}}
                >
                    <FontAwesomeIcon icon={ faPlus}/>
                </button>
            </div>
        </div>
        <div className='flex flex-row justify-between'>
            <div style={{width:'33%'}}>
                <h1 className='text-black text-2xl font-bold'>Working</h1>
                {projects.filter(project => project.progress === 'WORKING').map((project, i) =>
                <ModProjectCard key={i} project={ project}/>
                )}
            </div>
            <div style={{width:'33%'}}>
                <h1 className='text-black text-2xl font-bold'>In Review</h1>
                {projects.filter(project => project.progress === 'IN REVIEW').map((project, i) =>
                    <ModProjectCard key={i} project={ project}/>
                )}
            </div>
            <div style={{width:'33%'}}>               
                <h1 className='text-black text-2xl font-bold'>Completed</h1>
                {projects.filter(project => project.progress === 'COMPLETED').map((project, i) =>
                    <ModProjectCard key={i} project={ project}/>
                )}
            </div>
            
        </div>
    </div>
))

export default ProjectBody;