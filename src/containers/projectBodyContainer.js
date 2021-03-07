import ProjectBody from '../components/projectBody';
import { connect } from 'react-redux'
import {addProject, deleteProject, updateProject} from '../actions/projectActions'

const mapStateToProps = state => ({
    projects: [...state.projects]
})
const mapDisPatchToProps = dispatch => ({
    onAddProject(newProject = {}) {
        dispatch(addProject(newProject))
    },
    onRemoveProject(id = '') {
        dispatch(deleteProject(id))
    },
    onUpdateProject(id = '', newProjectDetails = {}) {
        dispatch(updateProject(id, newProjectDetails))
    }
})

const ProjectBodyContainer = connect(mapStateToProps, mapDisPatchToProps)(ProjectBody)
export default ProjectBodyContainer;