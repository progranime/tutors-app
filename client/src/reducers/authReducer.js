import { CREATE_EMAIL_CONFIRMATION } from '../actions/types'

const initialState = {}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_EMAIL_CONFIRMATION:
            return {
                ...state,
                payload
            }
        default:
            return state
    }
}

export default authReducer
