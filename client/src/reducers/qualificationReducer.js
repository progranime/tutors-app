import { GET_ALL_GENDER } from '../actions/types'

const initialState = {
    results: []
}

const qualificationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_GENDER:
            return {
                ...state,
                results: payload
            }
        default:
            return state
    }
}

export default qualificationReducer
