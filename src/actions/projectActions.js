import {ProjectConstants} from './constants';
export const addProject = (projectDetails = {}) => (
    {
        type: ProjectConstants.ADD_PROJECT,
        payload: projectDetails
    }
)

export const deleteProject = (id) => (
    {
        type: ProjectConstants.REMOVE_PROJECT,
        payload: id
    }
)

export const updateProject = (id, newProjectDetails) => (
    {
        type: ProjectConstants.UPDATE_PROJECT,
        payload: {id, newProjectDetails}
    }
)
