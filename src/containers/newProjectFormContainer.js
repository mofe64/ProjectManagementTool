import { connect } from 'react-redux'
import NewForm from '../components/newForm';
import {addProject} from '../actions/projectActions'

const mapStateToProps = state => ({
    projects: [...state.projects]
})

const mapDisPatchToProps = dispatch => ({
    onAddProject(newProject = {}) {
        dispatch(addProject(newProject))
    },
})

const NewProjectFormContainer = connect(mapStateToProps, mapDisPatchToProps)(NewForm);

export default NewProjectFormContainer;