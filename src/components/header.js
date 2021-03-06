import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () =>
    <div className='flex justify-between bg-white p-5 rounded-lg'>
        <div className='text-gray-500'>
            <FontAwesomeIcon icon={faSearch} className='relative left-7'/>
            <input type='search' placeholder='Search' className='bg-gray-200 p-3 rounded-3xl pl-10 pr-5 outline-none border-none'/>
        </div>
        <div className='flex text-gray-500 space-x-4' style={{marginTop:'0.5rem'}}>
            <FontAwesomeIcon icon={faBell}  className='mt-1'/>
            <p>UserName</p>
        </div>
    </div>

export default Header;