import TaskBody from '../components/tasksBody';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    tasks:[...state.tasks]
})
const mapDisPatchToProps = dispatch => ({})

const TaskBodyContainer = connect(mapStateToProps, mapDisPatchToProps)(TaskBody);
export default TaskBodyContainer;