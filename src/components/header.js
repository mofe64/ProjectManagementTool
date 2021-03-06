import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avater1 from '../images/3551739.jpg';
const Header = () =>
    <div className='flex justify-between bg-white p-5 rounded-lg'>
        <div className='text-gray-500'>
            <FontAwesomeIcon icon={faSearch} className='relative left-7'/>
            <input type='search' placeholder='Search' className='bg-gray-200 p-3 rounded-3xl pl-10 pr-5 outline-none border-none mt-4'/>
        </div>
        <div className='flex text-gray-500 space-x-4' style={{marginTop:'0.5rem'}}>
            <FontAwesomeIcon icon={faBell}  className='mt-3 text-3xl'/>
            <img src={avater1} alt='user profile' className='bg-transparent border-1 
            border-blue-300 rounded-full 
            h-14 w-14 flex items-center justify-center ring-2'></img>
        </div>
    </div>

export default Header;