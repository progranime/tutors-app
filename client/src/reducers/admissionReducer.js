import { GET_ALL_ADMISSION } from '../actions/types'

const initialState = {
    results: []
}

const admissionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_ADMISSION:
            return {
                ...state,
                results: payload
            }
        default:
            return state
    }
}

export default admissionReducer
