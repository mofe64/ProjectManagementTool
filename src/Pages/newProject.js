import Header from '../components/header';
import NewProjectFormContainer from '../containers/newProjectFormContainer';

const NewProject = () => 
    <div className='flex flex-col'>
        <Header />
        <NewProjectFormContainer/>
    </div>

export default NewProject;