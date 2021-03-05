import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const DashHeader = () =>
    <div className='flex justify-between'>
        <div>
            <FontAwesomeIcon icon={faSearch} />
            <input type='search' placeholder='Search'/>
        </div>
        <div className='flex'>
            <FontAwesomeIcon icon={faBell} />
            <p>UserName</p>
        </div>
    </div>

export default DashHeader;