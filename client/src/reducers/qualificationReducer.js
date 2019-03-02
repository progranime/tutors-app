import { GET_ALL_QUALIFICATION } from '../actions/types'

const initialState = {
    results: []
}

const qualificationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_QUALIFICATION:
            return {
                ...state,
                results: payload
            }
        default:
            return state
    }
}

export default qualificationReducer
