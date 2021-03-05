import { Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/dashboard';
import Projects from './Pages/projects';
import Tasks from './Pages/tasks';
import Reports from './Pages/reports';
import Settings from './Pages/settings'
const Container = () =>
    <div className='w-full'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/tasks' component={Tasks} />
            <Route exact path='/reports' component={Reports} />
            <Route exact path='/settings' component={Settings} />
        </Switch>
    </div>
    

export default Container;