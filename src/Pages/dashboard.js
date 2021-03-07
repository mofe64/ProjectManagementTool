import Header from '../components/header'
import DashBody from '../components/dashBody'
import DashboardBodyContainer from '../containers/dashboardBodyContainer';
const Dashboard = () => 
    <div className='flex flex-col'>
        <Header/>
        <DashboardBodyContainer/>
    </div>
    

export default Dashboard;
