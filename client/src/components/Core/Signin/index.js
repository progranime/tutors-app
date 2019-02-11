import React from 'react'
import PropTypes from 'prop-types'

const Index = ({ title, children }) => {
    return (
        <div className="signin signin--centered">
            <div className="signin__wrapper">
                <div className="signin__header">
                    <div className="signin__header-wrapper">
                        <p className="title">{title}</p>
                    </div>
                </div>
                <div className="signin__body">{children}</div>
            </div>
        </div>
    )
}

Index.defaultProps = {
    title: 'Sign In'
}

Index.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Index
