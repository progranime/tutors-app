import React, { Component } from 'react'

import { Container } from '../../../components/Layout'
import { SignupConfirmation } from '../../../components/Core/Signup'

export class Index extends Component {
    render() {
        return (
            <Container>
                <SignupConfirmation />
            </Container>
        )
    }
}

export default Index
