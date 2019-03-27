import React, { Component } from 'react'
import { Button } from 'grommet'
import styled from 'styled-components'
import Product from '../images/product.png'
import Element from '../images/top_element.png'
import Arrow from '../images/arrow.png'

const Section = styled.div`
    background-image: url(${Element});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: inherit;
`

const SecondaryBG = styled.div`
    background-image: url(${Product});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

const LandingContent = styled.div`
    margin-left: 15vw;
    position: absolute;
    z-index: 2;
`

const Text1 = styled.h2`
    color: #ffffff;
    margin: 0;
    font-weight: 400;
`
const Text2 = styled.h3`
    color: rgb(245, 194, 175);
    margin: 0;
    margin-top: 5px;
    font-size: 50px;
    line-height: 50px;
    font-weight: 500;
`
const Text3 = styled.h4`
    color: rgb(245, 194, 175);
    margin: 0;
    margin-top: 5px;
    font-size: 50px;
    line-height: 50px;
    font-weight: 100;
`

const ActionButton = styled.div`
    margin-top: 10px;

    & button {
        color: rgb(245, 194, 175);
    }
`

const ArrowHolder = styled.div`
    background-image: url(${Arrow});
    height: 380px;
    width: 58px;
    position: absolute;
    z-index: 2;
    right: 15vw;
    bottom: -88px;
`

class LandingSection extends Component {
    render() {
        return (
            <Section className="section">
                <ArrowHolder />
                <LandingContent>
                    <Text1>HD projector</Text1>
                    <Text2>smallest</Text2>
                    <Text3>in the World</Text3>
                    <ActionButton>
                        <Button label="notify me" onClick={() => {}} />
                    </ActionButton>
                </LandingContent>
                <SecondaryBG />
            </Section>
        )
    }
}

export default LandingSection
