import { TaskConstants } from '../actions/constants'
import {initialState} from '../initialstate'
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case TaskConstants.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            }
        case TaskConstants.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    task=> task.id !== action.payload
                )
            }
        case TaskConstants.SET_TASK_AS_COMPLETED:
            const taskToUpdate = state.tasks.filter(
                task => task.id === action.payload
            ) 
            taskToUpdate.completed = true
            return {
                ...state,
                task: state.tasks.filter(
                    task => task.id !== action.payload
                ).push(taskToUpdate)
            }
    }
}