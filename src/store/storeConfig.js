import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/User'
import postsReducer from './reducers/Posts'


const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,  
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig