import axios from 'axios'

import { GET_ALL_UNIVERSITY } from './types'

export const getAllUniversity = payload => dispatch => {
    const axiosOptions = {
        url: `/api/university/all`,
        method: 'get'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_UNIVERSITY,
            payload: res.data
        })
    })
}
