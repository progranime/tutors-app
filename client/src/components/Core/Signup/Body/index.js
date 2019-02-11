import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ children }) => {
    return <div className="signup__body">{children}</div>
}

Index.propTypes = {
    children: PropTypes.node.isRequired
}

export default Index
