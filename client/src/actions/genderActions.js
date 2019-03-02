import axios from 'axios'

import { GET_ALL_GENDER } from './types'

export const getAllGender = payload => dispatch => {
    const axiosOptions = {
        url: `/api/gender/all`,
        method: 'get'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_GENDER,
            payload: res.data
        })
    })
}
