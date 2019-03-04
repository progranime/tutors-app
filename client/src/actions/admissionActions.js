import axios from 'axios'

import { GET_ALL_ADMISSION } from './types'

export const getAllAdmission = payload => dispatch => {
    const axiosOptions = {
        url: `/api/admission/all`,
        method: 'get'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_ADMISSION,
            payload: res.data
        })
    })
}
