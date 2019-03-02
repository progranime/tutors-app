import axios from 'axios'

import { GET_ALL_QUALIFICATION } from './types'

export const getAllQualification = payload => dispatch => {
    const axiosOptions = {
        url: `/api/qualification/all`,
        method: 'get'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_QUALIFICATION,
            payload: res.data
        })
    })
}
