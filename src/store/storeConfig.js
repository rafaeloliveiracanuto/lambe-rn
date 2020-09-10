import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/User'

const reducers = combineReducers({
    user: userReducer,  
})

