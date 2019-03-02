import { GET_ALL_NATIONALITY } from '../actions/types'

const initialState = {}

const nationalityReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_NATIONALITY:
            return {
                ...state,
                results: payload
            }
        default:
            return state
    }
}

export default nationalityReducer
