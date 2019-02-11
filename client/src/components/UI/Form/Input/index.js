import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

const Index = ({ id, label, name, classes, value, onChange }) => {
    return (
        <TextField
            id={id}
            label={label}
            name={name}
            className={classes}
            value={value}
            onChange={onChange}
        />
    )
}

Index.defaultProps = {
    id: '',
    label: '',
    name: '',
    classes: '',
    value: '',
    onChange: () => {}
}

Index.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    classes: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Index
