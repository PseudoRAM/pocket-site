import React, { Component } from 'react'
import { Grommet } from 'grommet'
import styled from 'styled-components'
import AppBar from './components/AppBar'
import Background from './images/pattern-c.jpg'

const theme = {
    global: {
        colors: {
            brand: 'rgb(245, 194, 175)',
            text: '#ffffff',
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
    button: {
        color: '#ffffff',
        border: {
            width: '2px',
            radius: '10px',
        },
    },
}

const AppHolder = styled.div`
    background-image: url(${Background});
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vw;
`

class App extends Component {
    render() {
        return (
            <AppHolder className="App">
                <Grommet theme={theme}>
                    <AppBar />
                </Grommet>
            </AppHolder>
        )
    }
}

export default App
