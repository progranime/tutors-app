import { GET_ALL_UNIVERSITY } from '../actions/types'

const initialState = {
    results: []
}

const universityReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_UNIVERSITY:
            return {
                ...state,
                results: payload
            }
        default:
            return state
    }
}

export default universityReducer
