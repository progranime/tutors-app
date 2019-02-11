import React, { Component } from 'react'

import { Container } from '../../../components/Layout'
import SignupTutor from '../../../containers/Signup/Tutor'

export class Index extends Component {
    render() {
        return (
            <Container>
                <SignupTutor />
            </Container>
        )
    }
}

export default Index
