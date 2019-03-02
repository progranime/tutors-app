import { combineReducers } from 'redux'

import userReducer from './userReducer'
import errorReducer from './errorReducer'
import universityReducer from './universityReducer'
import authReducer from './authReducer'
import genderReducer from './genderReducer'
import nationalityReducer from './nationalityReducer'
import qualificationReducer from './qualificationReducer'

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    university: universityReducer,
    auth: authReducer,
    gender: genderReducer,
    nationality: nationalityReducer,
    qualification: qualificationReducer
})
