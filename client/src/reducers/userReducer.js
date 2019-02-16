import { GET_USER, GET_USER_SESSION } from '../actions/types'

const initialState = {
    profile: {},
    loading: false
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER || GET_USER_SESSION:
            return {
                ...state,
                profile: payload
            }
        default:
            return state
    }
}

export default userReducer
