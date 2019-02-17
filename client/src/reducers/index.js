import { combineReducers } from 'redux'

import userReducer from './userReducer'
import errorReducer from './errorReducer'
import universityReducer from './universityReducer'
import authReducer from './authReducer'

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    university: universityReducer,
    auth: authReducer
})
