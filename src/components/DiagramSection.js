import React, { Component } from 'react'
import styled from 'styled-components'
import Space from '../images/space2-c.png'
import SScreen from '../images/sscreen.png'
import Sketch from '../images/sketch.png'

const Content = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

const SpaceDiv = styled.div`
    background-image: url(${Space});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 260px;
    top: 0;
    left: 0;
`

const ScreenHolder = styled.div`
    background-image: url(${SScreen});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 500px;
    height: 559px;
    top: 50px;
    left: 0;
    position: absolute;
    margin: 0 calc(50vw - 250px);
`

const SketchHolder = styled.img`
    max-width: 833px;
    height: auto;
    width: 80vw;
    margin: 0 50vw;
    margin-top: calc(((100vh - 260px) / 2) + 50px);
    transform: translateY(-50%) translateX(-50%);
    display: block;
    position: absolute;
`

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
    line-height: 40px;
    color: #fff;
`

const ContentHolder = styled.div`
    background-color: #fff;
    position: relative;
    height: 100vh;
`

class DiagramSection extends Component {
    render() {
        return (
            <div className="section">
                <Content>
                    <SpaceDiv />
                    <InfoHolder>
                        <Text1>
                            Sets up in under 5 seconds,
                            <br />
                            <Text2>fill the room with vibrant color</Text2>
                        </Text1>
                    </InfoHolder>
                    <ContentHolder>
                        <SketchHolder src={Sketch} />
                    </ContentHolder>
                    <ScreenHolder />
                </Content>
            </div>
        )
    }
}

export default DiagramSection
