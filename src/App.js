import React, { Component } from 'react'
import { Grommet } from 'grommet'
import styled from 'styled-components'
import ReactFullpage from '@fullpage/react-fullpage'
import AppBar from './components/AppBar'
import AnimatedProjector from './components/AnimatedProjector'
import LandingSection from './components/LandingSection'
import StatsSection1 from './components/StatsSection1'
import StatsSection2 from './components/StatsSection2'
import StatsSection3 from './components/StatsSection3'
import InfoSection from './components/InfoSection'
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
    constructor(props) {
        super(props)
        this.state = {
            projector: <AnimatedProjector position={-1} />,
            api: null,
        }

        this.scrollChange = this.scrollChange.bind(this)
    }

    scrollChange(origin, destination, direction) {
        this.setState({
            projector: (
                <AnimatedProjector
                    position={destination.index}
                    direction={direction}
                />
            ),
        })
    }

    render() {
        return (
            <AppHolder className="App">
                <Grommet theme={theme}>
                    <AppBar api={this.state.api} />
                    {this.state.projector}
                    <ReactFullpage
                        scrollingSpeed={1400}
                        parallax
                        onLeave={this.scrollChange}
                        render={({ state, fullpageApi }) => {
                            if (this.state.api == null)
                                this.setState({ api: fullpageApi })
                            return (
                                <ReactFullpage.Wrapper>
                                    <LandingSection />
                                    <StatsSection1 />
                                    <StatsSection2 />,
                                    <StatsSection3 />,
                                    <InfoSection />,
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
