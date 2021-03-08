import { TaskConstants  } from './constants';
export const addTask = (taskDetails = {}) => ({
    type: TaskConstants.ADD_TASK,
    payload: taskDetails
})

export const deleteTask = (id) => (
    {
        type: TaskConstants.REMOVE_TASK,
        payload: id
    }
)

export const completeTask = (id) => ({
    type: TaskConstants.SET_TASK_AS_COMPLETED,
    payload: id
})

