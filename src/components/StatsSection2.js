import React, { Component } from 'react'
import styled from 'styled-components'
import Element from '../images/top_element-c.png'
import Dash from '../images/dash.png'

const Content = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

const Section = styled.div`
    background-image: url(${Element});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 calc(-200vh);
`

const Text1 = styled.h1`
    position: absolute;
    width: 200px;
    text-align: left;

    line-height: 20px;
    letter-spacing: 5px;
    color: #fff;

    font-weight: 500;
    margin: 0;
    font-size: 23px;
    line-height: 23px;
    color: #fff;

    right: 64vw;
    /* top: calc((100vh - (60vh * 0.4164013015184382)) / 2 - 25px); */
    top: calc((100vh - (60vh * 0.4164013015184382)) / 2 + 140px);

    @media (max-width: 630px) {
        top: 60px;
        left: 0;
        width: 200px;
        margin: 0 calc(50vw - 100px);
        text-align: center;
    }
`

const Text2 = styled.span`
    width: 100%;
    font-weight: 100;
    margin: 0;
    font-size: 24px;
    line-height: 24px;
    color: #fff;
`

const DashHolder = styled.div`
    background-image: url(${Dash});
    background-repeat: no-repeat;
    background-size: cover;

    width: 350px;
    height: 1.7px;

    /* margin-top: calc((100vh - (60vh * 0.4164013015184382)) / 2 - 60px); */
    margin-top: calc((100vh - (60vh * 0.4164013015184382)) / 2 + 300px);
    margin-right: 52vw;
    float: right;

    @media (max-width: 630px) {
        display: none;
    }
`

class StatsSection2 extends Component {
    render() {
        return (
            <Section className="section">
                <Content>
                    <DashHolder />
                    <Text1>
                        Finally, a pocket sized projector
                        <Text2> that requires no fiddling around</Text2>
                    </Text1>
                </Content>
            </Section>
        )
    }
}

export default StatsSection2
