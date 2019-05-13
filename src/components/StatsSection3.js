import React, { Component } from 'react'
import styled from 'styled-components'
import Diagram from '../images/sec5.png'
import Space from '../images/space.png'

const Content = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

const Section = styled.div`
    background-image: url(${Space});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center calc(40vh);
`

const DiagramHolder = styled.div`
    background-image: url(${Diagram});
    background-repeat: no-repeat;
    background-size: cover;

    width: calc(60vw);
    height: calc(60vw * 0.4164013015184382);

    margin: calc((100vh - (60vw * 0.4164013015184382)) / 2 - 60px) 20vw;

    @media (max-width: 630px) {
        display: none;
    }
`

//background-position: 0 calc(-200vh);

const InfoHolder = styled.div`
    position: absolute;
    top: 64px;
    left: 0;
    width: 100vw;
`

const Text1 = styled.h1`
    color: #fff;
    text-align: center;

    font-weight: 500;
    margin: 0;
    font-size: 23px;
    line-height: 23px;

    width: calc(100% - 40px);
    margin: 0 20px;
`

const Text2 = styled.span`
    width: 100%;
    font-weight: 100;
    margin: 0;
    font-size: 24px;
    line-height: 24px;
    color: #fff;
`

class StatsSection3 extends Component {
    render() {
        return (
            <Section className="section">
                <Content>
                    <DiagramHolder />
                    <InfoHolder>
                        <Text1>
                            Simply connects to any phone or laptop
                            <br />
                            <Text2>
                                in under 5 seconds and starts projecting.
                            </Text2>
                        </Text1>
                    </InfoHolder>
                </Content>
            </Section>
        )
    }
}

export default StatsSection3
