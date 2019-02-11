import React, { Component } from 'react'

import { Container } from '../../components/Layout'
import Signup from '../../containers/Signup'

export class Index extends Component {
    render() {
        return (
            <Container>
                <Signup />
            </Container>
        )
    }
}

export default Index
