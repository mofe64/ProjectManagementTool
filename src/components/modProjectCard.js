import '../css/card.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tag from './tag'
const ModProjectCard = ({project = {}}) =>
    <div className='bg-white flex flex-col rounded-2xl mt-5 card p-5 mr-10' >
        <div className='class-header flex justify-between mb-4'>
            <div className='class-header-left'>
                <h1 className='text-3xl font-bold'>{ project.title}</h1>
                <p className='text-lg font-medium'>{ project.projectDesc}</p>
            </div>
            <div className='class-header-right'>
                <div className='bg-transparent border-2 border-gray-300 rounded-full h-7 w-7 flex items-center justify-center'>
                    <FontAwesomeIcon icon={ faStar } className='text-yellow-300'/>
                </div>            
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='bg-gray-200 rounded-md pt-2 pb-2 pl-4 pr-4'>
                <p>{ project.progress}</p>
            </div>
            <div className='bg-transparent border-2 border-red-500 rounded-md pb-2 pt-2 pl-4 pr-4'>
                <p>Priority</p>
            </div>
        </div>
        <div className='flex space-x-3 mt-5'>
            {project.tags.map((tagname, i) =>
                <Tag key={i} tagname={tagname}></Tag>
            )}
        </div>
    </div>

export default ModProjectCard;