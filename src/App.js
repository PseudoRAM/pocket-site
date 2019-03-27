import React, { Component } from 'react'
import { Grommet } from 'grommet'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
import AppBar from './components/AppBar'
import LandingSection from './components/LandingSection'
import Background from './images/pattern.jpg'

const theme = {
    global: {
        colors: {
            brand: 'rgb(245, 194, 175)',
            text: '#ffffff',
        },
        font: {
            family: 'Roboto',
            size: '13px',
            height: '20px',
        },
    },
    button: {
        color: '#ffffff',
        border: {
            width: '1px',
            radius: '6px',
        },
    },
    text: {
        medium: {
            size: '13px',
        },
    },
}

const AppHolder = styled.div`
    background-image: url(${Background});
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
`

class App extends Component {
    render() {
        return (
            <AppHolder className="App">
                <Grommet theme={theme}>
                    <AppBar />
                    <ReactFullpage
                        scrollingSpeed={1400}
                        render={({ state, fullpageApi }) => {
                            return (
                                <ReactFullpage.Wrapper>
                                    <LandingSection />
                                    <div className="section">
                                        <p>Section 2</p>
                                    </div>
                                </ReactFullpage.Wrapper>
                            )
                        }}
                    />
                </Grommet>
            </AppHolder>
        )
    }
}

export default App
