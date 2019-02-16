import axios from 'axios'

// import { GET_USER } from './types'

export const getUserSession = payload => {
    const axiosOptions = {
        url: `/api/user/profile`,
        method: 'post',
        data: payload
    }

    return new Promise(resolve => {
        axios(axiosOptions).then(res => {
            resolve(res.data[0])
        })
    })
}
