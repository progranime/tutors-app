import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Index = ({ link, title }) => {
    return (
        <div className="signup__footer">
            <Link to={link}>{title}</Link>
        </div>
    )
}

Index.defaultProps = {
    link: '/',
    title: ''
}

Index.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string
}

export default Index
