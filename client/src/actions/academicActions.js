import axios from 'axios'

import { GET_ALL_ACADEMIC } from './types'

export const getAllAcademic = payload => dispatch => {
    const axiosOptions = {
        url: `/api/academic/all`,
        method: 'get'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_ALL_ACADEMIC,
            payload: res.data
        })
    })
}
