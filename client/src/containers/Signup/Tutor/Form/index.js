import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Grid,
    Button,
    TextField,
    FormControl,
    Select,
    MenuItem,
    InputLabel
} from '@material-ui/core'
import queryString from 'query-string'
import { connect } from 'react-redux'

import { SignupHeader, SignupBody } from '../../../../components/Core/Signup'
import { getAllUniversity } from '../../../../actions/universityActions'

export class Index extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        university: '',
        password: '',
        userTypeId: 3
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    componentDidMount() {
        const searchQuery = queryString.parse(this.props.location.search)
        this.setState({
            userTypeId: searchQuery.type === 'graduated' ? 4 : 3
        })

        // get all university
        this.props.getAllUniversity()
    }

    renderUniversityOptions = () => {
        let options =
            this.props.university.results &&
            this.props.university.results.map(university => {
                return (
                    <MenuItem value={university.id} key={university.id}>
                        {university.name}
                    </MenuItem>
                )
            })

        return (
            <FormControl>
                <InputLabel>University</InputLabel>
                <Select
                    value={this.state.university}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'university'
                    }}
                >
                    {options}
                </Select>
            </FormControl>
        )
    }

    renderForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email Address"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        {this.renderUniversityOptions()}
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            label="Create a password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="outlined"
                            className="p-2"
                            fullWidth
                        >
                            Sign up
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

    render() {
        return (
            <div className="signup signup--centered">
                <div className="signup__wrapper">
                    <SignupHeader
                        backLink="/signup/tutor"
                        title="Tutor Sign Up"
                    />
                    <SignupBody>{this.renderForm()}</SignupBody>
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    university: PropTypes.object.isRequired,
    getAllUniversity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    university: state.university
})

const mapDispatchToProps = {
    getAllUniversity
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
