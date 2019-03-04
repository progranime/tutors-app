import { combineReducers } from 'redux'

import userReducer from './userReducer'
import errorReducer from './errorReducer'
import universityReducer from './universityReducer'
import authReducer from './authReducer'
import genderReducer from './genderReducer'
import nationalityReducer from './nationalityReducer'
import qualificationReducer from './qualificationReducer'
import admissionReducer from './admissionReducer'
import academicReducer from './academicReducer'

export default combineReducers({
    user: userReducer,
    error: errorReducer,
    university: universityReducer,
    auth: authReducer,
    gender: genderReducer,
    nationality: nationalityReducer,
    qualification: qualificationReducer,
    admission: admissionReducer,
    academic: academicReducer
})
