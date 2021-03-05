import { faGripHorizontal, faBriefcase, faTasks, faClipboard, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/nav.css'

const Navbar = () => 
    <div className='flex flex-col text-2xl font-semibold text-gray-500 bg-white rounded-lg'>
        <div className='flex justify-center m-10'>
            Logo
        </div>
        <div className='flex  space-x-4 tab'>
            <FontAwesomeIcon icon={faGripHorizontal}  className='my-1.5' />
            <p><a href="/">Dashboard</a></p>
        </div>
        <div className='flex space-x-4 tab'>
            <FontAwesomeIcon icon={faBriefcase} className='my-1.5'/>
            <p><a href="/projects">Projects</a></p>
        </div>
        <div className='flex space-x-4 tab'>
            <FontAwesomeIcon icon={faTasks} className='my-1.5'/>
            <p><a href="/tasks">My Tasks</a></p>
        </div>
        <div className='flex space-x-4 tab'>
            <FontAwesomeIcon icon={ faClipboard} className='my-1.5'/>
            <p><a href="/reports">Reports</a></p>
        </div>
        <div className='flex space-x-4 tab'>
            <FontAwesomeIcon icon={faCogs} className='my-1.5'/>
            <p><a href="/settings">Settings</a></p>
        </div>
    </div>

export default Navbar;
