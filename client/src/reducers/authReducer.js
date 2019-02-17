import {
    CREATE_EMAIL_CONFIRMATION,
    CREATE_ACTIVATE_EMAIL
} from '../actions/types'

const initialState = {
    message: ''
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_EMAIL_CONFIRMATION:
            return {
                ...state,
                payload
            }
        case CREATE_ACTIVATE_EMAIL:
            return {
                ...state,
                message: payload.message
            }
        default:
            return state
    }
}

export default authReducer
