import {ProjectConstants} from '../actions/constants'
export const projectsReducer = (state= {}, action) => {
    switch (action.type) {
        case ProjectConstants.ADD_PROJECT:  
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload
                ]
            }
        case ProjectConstants.REMOVE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload)
            }
        case ProjectConstants.UPDATE_PROJECT:
            return {
                ...state,
                
                projects: state.projects.filter(project => project.id !== action.payload.id),
                // eslint-disable-next-line
                projects: [
                    ...state.projects,
                    action.payload.newProjectDetails
                ]
            }
        default: 
            return state
    }
}