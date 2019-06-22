import React, { Component } from 'react'
import styled from 'styled-components'
import Space from '../images/space-c.png'
import Slider from '../images/slider-c.jpg'
import Preview from '../images/preview-c.jpg'

const BG = styled.div`
    background-image: url(${Space});
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center calc(-100vh + 40vh); */
`

const Text1 = styled.h1`
    position: absolute;
    width: 290px;
    text-align: left;

    letter-spacing: 1px;
    color: #222;

    font-weight: 500;
    margin: 0;
    font-size: 23px;
    line-height: 27px;

    right: 12px;

    @media (max-width: 630px) {
        top: 34%;
        left: 0;
        width: 200px;
        transform: translateY(-50%) translateX(-50%);
        margin: 0 50%;
        text-align: center;
    }

    top: 50%;
    transform: translateY(-50%);

    opacity: 1;

    animation: animateTextIn 3s;
    @keyframes animateTextIn {
        100% {
            opacity: 1;
        }
        0% {
            opacity: 0;
        }
    }
`

const Text2 = styled.span`
    width: 100%;
    font-weight: 100;
    margin: 0;
    font-size: 24px;
    color: #222;
`

const Content = styled.div`
    background-image: url(${Slider});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 630px) {
        background: #fff;
    }

    width: 84vw;
    height: 79vh;
    margin: 0 8vw;
    top: 0;
    left: 0;
    z-index: 4;
    position: relative;
`

const PreviewHolder = styled.div`
    background-image: url(${Preview});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 303.75px;
    height: 151.1px;
    bottom: 0;
    left: 0;
    z-index: 4;
    position: absolute;
`

class InfoSection extends Component {
    render() {
        return (
            <Section className="section">
                <BG />
                <Content>
                    <Text1>
                        <Text2>
                            It corrects the image
                            <br />
                            so that you can place
                            <br />
                            it anywhere.
                        </Text2>
                        <br />
                        <br />
                        No more awkwardly
                        <br />
                        rearranging
                        <br />
                        furniture to watch
                        <br />
                        an impromptu
                        <br />
                        movie.
                    </Text1>
                    <PreviewHolder />
                </Content>
            </Section>
        )
    }
}

export default InfoSection
