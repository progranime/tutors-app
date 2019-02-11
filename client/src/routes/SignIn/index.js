import React, { Component } from 'react'

import { Container } from '../../components/Layout'
import Signin from '../../containers/Signin'

export class Index extends Component {
    render() {
        return (
            <Container>
                <Signin />
            </Container>
        )
    }
}

export default Index
