import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SignupConfirmation } from '../../../components/Core/Signup'
import config from '../../../config'
import { loadState } from '../../../store/localStorage'

export class Index extends Component {
    render() {
        return (
            <div>
                <SignupConfirmation
                    email={loadState(config.confirmationEmail).email}
                    firstName={loadState(config.confirmationEmail).firstName}
                />
            </div>
        )
    }
}

export default Index
