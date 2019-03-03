import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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

import { Stepper } from '../../../../components/UI'
import { getUser, updateUser } from '../../../../actions/userActions'
import { getAllGender } from '../../../../actions/genderActions'
import { getAllNationality } from '../../../../actions/nationalityActions'
import { getAllQualification } from '../../../../actions/qualificationActions'

export class Index extends Component {
    state = {
        id: '',
        token: '',
        firstName: null,
        lastName: '',
        genderId: '',
        birthDate: '',
        nationalityId: '',
        cellphone: '',
        qualificationId: '',
        courseTitle: '',
        startYear: '',
        endYear: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updateUser(this.state, this.props.history)
    }

    renderGenderOptions = () => {
        let options =
            this.props.gender.results &&
            this.props.gender.results.map(gender => (
                <MenuItem value={gender.id} key={gender.id}>
                    {gender.name}
                </MenuItem>
            ))

        return (
            <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                    value={this.state.genderId || ''}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'genderId'
                    }}
                >
                    {options}
                </Select>
            </FormControl>
        )
    }

    renderNationalityOptions = () => {
        let options =
            this.props.nationality.results &&
            this.props.nationality.results.map(nationality => (
                <MenuItem value={nationality.id} key={nationality.id}>
                    {nationality.name}
                </MenuItem>
            ))

        return (
            <FormControl fullWidth>
                <InputLabel>Nationality</InputLabel>
                <Select
                    value={this.state.nationalityId || ''}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'nationalityId'
                    }}
                >
                    {options}
                </Select>
            </FormControl>
        )
    }

    renderQaulificationOptions = () => {
        let options =
            this.props.qualification.results &&
            this.props.qualification.results.map(qualification => (
                <MenuItem value={qualification.id} key={qualification.id}>
                    {qualification.name}
                </MenuItem>
            ))

        return (
            <FormControl fullWidth>
                <InputLabel>Qualification</InputLabel>
                <Select
                    value={this.state.qualificationId || ''}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'qualificationId'
                    }}
                >
                    {options}
                </Select>
            </FormControl>
        )
    }

    renderPersonalDetailsForm = () => {
        return (
            <div>
                <div>
                    <h4>
                        Thanks for signing up! Please complete your registration
                    </h4>
                    <p>
                        Once you submit these details, we will review them and
                        progress your application to the next stage
                    </p>
                </div>

                <h6>Personal Details</h6>

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            value={this.state.firstName || ''}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={this.state.lastName || ''}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {this.renderGenderOptions()}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {this.renderNationalityOptions()}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="birthDate"
                            label="Date of Birth"
                            name="birthDate"
                            value={this.state.birthDate || ''}
                            type="date"
                            onChange={this.handleChange}
                            fullWidth
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="cellphone"
                            label="Cellphone Number"
                            name="cellphone"
                            value={this.state.cellphone || ''}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }

    renderEducationForm = () => {
        return (
            <div>
                <p>What did you study at?</p>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        {this.renderQaulificationOptions()}
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="courseTitle"
                            label="Course Title"
                            name="courseTitle"
                            value={this.state.courseTitle || ''}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="startYear"
                            label="Start Year"
                            name="startYear"
                            value={this.state.startYear || ''}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="endYear"
                            label="End Year"
                            name="endYear"
                            value={this.state.endYear || ''}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }

    renderSubjectForm = () => {
        return (
            <div>
                <p>What subjects you want to tutor?</p>

                <Grid item xs={12} className="my-4 center-align">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="p-2"
                    >
                        Submit
                    </Button>
                </Grid>
            </div>
        )
    }

    componentDidMount() {
        const searchQuery = queryString.parse(this.props.location.search)

        this.setState({
            id: searchQuery.id,
            token: searchQuery.token
        })

        this.props.getUser({ id: searchQuery.id })
        this.props.getAllGender()
        this.props.getAllNationality()
        this.props.getAllQualification()
    }

    static getDerivedStateFromProps(props, state) {
        if (
            props.user.result.first_name !== state.firstName ||
            props.user.result.last_name !== state.lastName ||
            props.user.result.gender_id !== state.genderId ||
            props.user.result.birth_date !== state.birthDate ||
            props.user.result.nationality_id !== state.nationalityId ||
            props.user.result.cellphone !== state.cellphone ||
            props.user.result.qualification_id !== state.qualificationId ||
            props.user.result.course_title !== state.courseTitle ||
            props.user.result.start_year !== state.startYear ||
            props.user.result.end_year !== state.endYear
        ) {
            return {
                firstName: state.firstName || props.user.result.first_name,
                lastName: state.lastName || props.user.result.last_name,
                genderId: state.genderId || props.user.result.gender_id,
                birthDate: state.birthDate || props.user.result.birth_date,
                nationalityId:
                    state.nationalityId || props.user.result.nationality_id,
                cellphone: state.cellphone || props.user.result.cellphone,
                qualificationId:
                    state.qualificationId || props.user.result.qualification_id,
                courseTitle:
                    state.courseTitle || props.user.result.course_title,
                startYear: state.startYear || props.user.result.start_year,
                endYear: state.endYear || props.user.result.end_year
            }
        }

        return null
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="my-4">
                <Stepper
                    step1={this.renderPersonalDetailsForm()}
                    step2={this.renderEducationForm()}
                    step3={this.renderSubjectForm()}
                />
            </form>
        )
    }
}

Index.propTypes = {
    gender: PropTypes.object.isRequired,
    nationality: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    qualification: PropTypes.object.isRequired,
    getAllGender: PropTypes.func.isRequired,
    getAllNationality: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    getAllQualification: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    gender: state.gender,
    nationality: state.nationality,
    user: state.user,
    qualification: state.qualification
})

const mapDispatchToProps = {
    getAllGender,
    getAllNationality,
    getUser,
    getAllQualification,
    updateUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
