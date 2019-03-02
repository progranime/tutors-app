import { GET_USER, GET_USER_SESSION } from '../actions/types'

const initialState = {
    result: {},
    loading: false
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER || GET_USER_SESSION:
            return {
                ...state,
                result: payload
            }
        default:
            return state
    }
}

export default userReducer
