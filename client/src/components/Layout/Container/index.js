import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ children, classes }) => {
    return <div className={`container ${classes}`}>{children}</div>
}

Index.defaultValue = {
    classes: ''
}

Index.propTypes = {
    classes: PropTypes.string
}

export default Index
