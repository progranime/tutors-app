import axios from 'axios'

import { GET_USER, GET_USER_SESSION } from './types'

export const getUserSession = payload => dispatch => {
    const axiosOptions = {
        url: `/api/user/profile`,
        method: 'post',
        data: payload
    }

    return new Promise(resolve => {
        axios(axiosOptions).then(res => {
            dispatch({
                type: GET_USER_SESSION,
                payload: res.data[0]
            })
            resolve(res.data[0])
        })
    })
}

export const getUser = payload => dispatch => {
    const axiosOptions = {
        url: `/api/user/profile/${payload.id}`,
        method: 'get'
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    })
}
