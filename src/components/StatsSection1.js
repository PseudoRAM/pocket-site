import React, { Component } from 'react'
import styled from 'styled-components'
import Mobile from '../images/mobile.png'
import Element from '../images/top_element-c.png'

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
    background-position: 0 calc(-100vh);
`

const Text1 = styled.h2`
    position: absolute;
    width: 200px;
    text-align: center;
    top: 80px;
    font-weight: 100;

    margin: 0;
    font-size: 10px;
    top: calc((50vh - 190px / 2 - 40px) * 0.66);

    line-height: 20px;
    letter-spacing: 5px;
    left: calc(50vw - 100px);
    color: #fff;
`

const TextHolderLeft = styled.div`
    width: max-content;
    text-align: right;
    top: calc(50vh - 25px);
    left: calc(50vw - 240px - 76px);
    position: absolute;

    @media (max-width: 630px) {
        text-align: center;
        top: calc(50vh + 200px);
        left: calc(50vw - 105px);
    }
`

const TextHolderRight = styled.div`
    width: max-content;
    text-align: left;
    top: calc(50vh - 25px);
    left: calc(50vw + 112px);
    position: absolute;

    @media (max-width: 630px) {
        text-align: center;
        top: calc(50vh + 120px);
        left: calc(50vw - 65px);
    }
`

const Text2 = styled.h2`
    width: 100%;
    font-weight: 500;
    margin: 0;
    font-size: 23px;
    line-height: 23px;
    color: #fff;
`

const Text3 = styled.h2`
    width: 100%;
    font-weight: 100;
    margin: 0;
    font-size: 24px;
    line-height: 24px;
    color: #fff;
`

const MobileHolder = styled.div`
    background-image: url(${Mobile});
    position: absolute;
    z-index: 2;

    height: 190px;
    width: 240px;
    left: calc(50vw - 240px / 2);
    top: calc(50vh - 190px / 2);
    background-repeat: no-repeat;
    background-size: contain;
`

class StatSection1 extends Component {
    render() {
        return (
            <Section className="section">
                <MobileHolder />
                <Content>
                    <Text1>
                        A CINEMA
                        <br />
                        IN YOUR POCKET
                    </Text1>
                    <TextHolderLeft>
                        <Text2>4 hours</Text2>
                        <Text3>of continuous video</Text3>
                    </TextHolderLeft>
                    <TextHolderRight>
                        <Text2>Half the size</Text2>
                        <Text3>of a phone</Text3>
                    </TextHolderRight>
                </Content>
            </Section>
        )
    }
}

export default StatSection1
