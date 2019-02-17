import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { SignupConfirmation } from '../../../components/Core/Signup'
import config from '../../../config'
import { loadState } from '../../../store/localStorage'
import {
    createEmailConfirmation,
    activateEmail
} from '../../../actions/authActions'
import queryString from 'query-string'

export class Index extends Component {
    handleResendEmail = () => {
        this.props.createEmailConfirmation(loadState(config.confirmationEmail))
    }

    componentDidMount() {
        // check if have token and id params
        // if have confirm the email and redirect it to the signin page
        const searchQuery = queryString.parse(this.props.location.search)

        if (searchQuery.token !== undefined && searchQuery.id !== undefined) {
            // activate the email
            this.props.activateEmail(
                {
                    id: searchQuery.id,
                    token: searchQuery.token
                },
                this.props.history
            )
        }
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
    createEmailConfirmation: PropTypes.func.isRequired,
    activateEmail: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = {
    createEmailConfirmation,
    activateEmail
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
