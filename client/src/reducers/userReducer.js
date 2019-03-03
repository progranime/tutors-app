import { GET_USER, GET_USER_SESSION, UPDATE_USER } from '../actions/types'

const initialState = {
    result: {},
    loading: false,
    message: ''
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER || GET_USER_SESSION:
            return {
                ...state,
                result: payload
            }
        case UPDATE_USER:
            return {
                ...state,
                message: payload.message
            }
        default:
            return state
    }
}

export default userReducer
