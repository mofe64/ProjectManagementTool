// eslint-disable-next-line
import { createStore, combineReducers } from 'redux';
import { projectsReducer } from './reducers/projectReducer';
import {initialState} from './initialstate'
const store = createStore(
    projectsReducer,
    (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']): initialState
)

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})
store.subscribe(() => console.log(`project count :${store.getState().projects.length}`))
export default store;