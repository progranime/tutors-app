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
    InputLabel,
    Paper
} from '@material-ui/core'
import queryString from 'query-string'

import { Stepper } from '../../../../components/UI'
import { getUser, updateUser } from '../../../../actions/userActions'
import { getAllGender } from '../../../../actions/genderActions'
import { getAllNationality } from '../../../../actions/nationalityActions'
import { getAllQualification } from '../../../../actions/qualificationActions'
import { getAllAcademic } from '../../../../actions/academicActions'
import { getAllAdmission } from '../../../../actions/admissionActions'

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
        endYear: '',
        academicId: [],
        academicHourlyRate: [],
        admissionId: [],
        admissionHourlyRate: []
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

    renderAcademicOptions = () => {
        let options =
            this.props.academic.results &&
            this.props.academic.results.map(academic => (
                <MenuItem value={academic.id} key={academic.id}>
                    {academic.name}
                </MenuItem>
            ))

        return (
            <FormControl fullWidth>
                <InputLabel>Academic Subjects</InputLabel>
                <Select
                    value={this.state.academicId}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'academicId'
                    }}
                >
                    {options}
                </Select>
            </FormControl>
        )
    }

    renderPersonalDetailsForm = () => {
        return (
            <Paper className="p-4 mt-4">
                <div className="center-align">
                    <h5>
                        Thanks for signing up! Please complete your registration
                    </h5>
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
            </Paper>
        )
    }

    renderEducationForm = () => {
        return (
            <Paper className="p-4 mt-4">
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
            </Paper>
        )
    }

    renderSubjectForm = () => {
        return (
            <Paper className="p-4 mt-4">
                <p>What subjects you want to tutor?</p>

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        {this.renderAcademicOptions()}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="academicHourlyRate"
                            label="Hourly Rate"
                            name="academicHourlyRate"
                            value={this.state.academicHourlyRate || []}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>

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
                </Grid>
            </Paper>
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
        this.props.getAllAcademic()
        this.props.getAllAdmission()
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
    academic: PropTypes.object.isRequired,
    admission: PropTypes.object.isRequired,
    getAllGender: PropTypes.func.isRequired,
    getAllNationality: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    getAllQualification: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    getAllAcademic: PropTypes.func.isRequired,
    getAllAdmission: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    gender: state.gender,
    nationality: state.nationality,
    user: state.user,
    qualification: state.qualification,
    academic: state.academic,
    admission: state.admission
})

const mapDispatchToProps = {
    getAllGender,
    getAllNationality,
    getUser,
    getAllQualification,
    updateUser,
    getAllAcademic,
    getAllAdmission
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
