import React, { Component } from 'react'
import styled from 'styled-components'
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
    background-position: 0 calc(-200vh);
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

class StatsSection2 extends Component {
    render() {
        return (
            <Section className="section">
                <Content>
                    <Text1 />
                </Content>
            </Section>
        )
    }
}

export default StatsSection2
