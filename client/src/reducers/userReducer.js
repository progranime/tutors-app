import { GET_USER } from '../actions/types'

const initialState = {
    profile: {}
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER:
            return {
                ...state,
                profile: payload
            }
        default:
            return state
    }
}

export default userReducer
