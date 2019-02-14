import { GET_ERROR } from '../actions/types'

const initialState = {}

const errorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ERROR:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export default errorReducer
