import ProjectCard from './projectCard';
import MessageCard from './messageCard';
import TaskCard from './taskCard';

const DashBody = ({ projects=[], messages=[], tasks=[] }) => 
    <div className='flex flex-wrap'>
        {projects.map((project, i) => 
            <ProjectCard key={i} project={ project}/>
        )}
        <MessageCard messages={ messages}/>
        <TaskCard tasks={tasks}/>
    </div>
    

export default DashBody;
