import DashBody from '../components/dashBody';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    projects: [...state.projects],
    messages: [...state.messages],
    tasks: [...state.tasks],
})

const mapDisPatchToProps = dispatch => ({})

const DashboardBodyContainer = connect(mapStateToProps, mapDisPatchToProps)(DashBody);
export default DashboardBodyContainer;