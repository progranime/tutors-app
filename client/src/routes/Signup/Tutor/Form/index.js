import React, { Component } from 'react'

import { Container } from '../../../../components/Layout'
import SignupTutorForm from '../../../../containers/Signup/Tutor/Form'

export class Index extends Component {
    render() {
        return (
            <Container>
                <SignupTutorForm />
            </Container>
        )
    }
}

export default Index