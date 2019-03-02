import React, { Component } from 'react'

import { Container } from '../../../../components/Layout'
import SignupTutorPreForm from '../../../../containers/Signup/Tutor/PreForm'

export class Index extends Component {
    render() {
        return (
            <Container>
                <SignupTutorPreForm {...this.props} />
            </Container>
        )
    }
}

export default Index
