import React, { Component } from 'react'
import styled from 'styled-components'
import Specs from '../images/specs.png'

const Content = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`
const SpecsHolder = styled.div`
    background-image: url(${Specs});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 80vh;
    transform: translateY(10vh);
`

const ContentHolder = styled.div`
    background-color: #fff;
    position: relative;
    height: calc(100vh + 20px);
`

class SpecsSection extends Component {
    render() {
        return (
            <div className="section">
                <Content>
                    <ContentHolder>
                        <SpecsHolder />
                    </ContentHolder>
                </Content>
            </div>
        )
    }
}

export default SpecsSection
