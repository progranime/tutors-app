import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack'

const Index = ({ backLink, title, loginLink }) => {
    return (
        <div className="signup__header">
            <div className="signup__header-wrapper">
                <Button component={Link} to={backLink}>
                    <ArrowBack />
                </Button>
            </div>
            <div className="signup__header-wrapper">
                <p className="title">{title}</p>
            </div>
            <div className="signup__header-wrapper">
                <Button
                    component={Link}
                    to={loginLink}
                    variant="outlined"
                    color="primary"
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

Index.defaultProps = {
    backLink: '/',
    title: 'Sign up',
    loginLink: '/login'
}

Index.propTypes = {
    backLink: PropTypes.string,
    title: PropTypes.string,
    loginLink: PropTypes.string
}

export default Index
