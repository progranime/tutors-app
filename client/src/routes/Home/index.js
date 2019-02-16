import React, { Component } from 'react'

import { Container } from '../../components/Layout'
import Home from '../../containers/Home'

export class Index extends Component {
    render() {
        return (
            <Container>
                <Home history={this.props.history} />
            </Container>
        )
    }
}

export default Index
