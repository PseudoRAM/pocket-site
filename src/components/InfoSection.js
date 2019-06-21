import React, { Component } from 'react'
import styled from 'styled-components'
import Space from '../images/space-c.png'

const BG = styled.div`
    background-image: url(/static/media/space.e70e8433.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: -63vh;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`

const Section = styled.div`
    /* background-image: url(${Space});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center calc(-100vh + 40vh); */
`
const Content = styled.div`
    background-color: #fff;
    width: 84vw;
    height: 79vh;
    margin: 0 8vw;
    margin-top: 80px;
    top: 0;
    left: 0;
    z-index: 4;
    position: absolute;
`

class InfoSection extends Component {
    render() {
        return (
            <Section className="section">
                <BG />
                <Content />
            </Section>
        )
    }
}

export default InfoSection
