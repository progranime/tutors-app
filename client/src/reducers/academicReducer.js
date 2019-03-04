import { GET_ALL_ACADEMIC } from '../actions/types'

const initialState = {
    results: []
}

const academicReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_ACADEMIC:
            return {
                ...state,
                results: payload
            }
        default:
            return state
    }
}

export default academicReducer
