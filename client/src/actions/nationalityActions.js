import axios from 'axios'

import { GET_ALL_NATIONALITY } from './types'

export const getAllGender = payload => dispatch => {
    const axiosOptions = {
        url: `/api/nationality/all`,
        method: 'get'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_NATIONALITY,
            payload: res.data
        })
    })
}
