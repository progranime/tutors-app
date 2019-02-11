import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Index = ({ link }) => {
    return (
        <div className="signup__footer">
            <Link to={link}>Apply to become a tutor</Link>
        </div>
    )
}

Index.defaultProps = {
    link: '/'
}

Index.propTypes = {
    link: PropTypes.string
}

export default Index
