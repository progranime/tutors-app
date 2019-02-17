import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { SignupConfirmation } from '../../../components/Core/Signup'
import config from '../../../config'
import { loadState } from '../../../store/localStorage'
import { createEmailConfirmation } from '../../../actions/authActions'

export class Index extends Component {
    handleResendEmail = () => {
        this.props.createEmailConfirmation(loadState(config.confirmationEmail))
    }

    render() {
        return (
            <div>
                <SignupConfirmation
                    email={loadState(config.confirmationEmail).email}
                    firstName={loadState(config.confirmationEmail).firstName}
                    resendEmail={this.handleResendEmail}
                />
            </div>
        )
    }
}

Index.propTypes = {
    auth: PropTypes.object.isRequired,
    createEmailConfirmation: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = {
    createEmailConfirmation
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
