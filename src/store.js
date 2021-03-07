import { createStore } from 'redux';
import { projectsReducer } from './reducers/projectReducer';
import {initialState} from './initialstate'
const store = createStore(
    projectsReducer,
    initialState
)
store.subscribe(()=> console.log(`project count :${store.getState().projects.length}`))
export default store;