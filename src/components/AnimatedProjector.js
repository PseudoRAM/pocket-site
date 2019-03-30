import React, { Component } from 'react'
import styled from 'styled-components'
import Projector from '../images/projector.png'

const FullScreenPosition = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`
const constantStyles = `
    background-image: url(${Projector});
    background-repeat: no-repeat;
    position: absolute;
    background-size: contain;
    z-index: 3;
`

const ProjectorHolderInitial = styled.div`
    top: 75vh;
    left: calc(50vw - 35px);
    height: 156px;
    width: 70px;
    ${constantStyles}
`

const ProjectorHolder1 = styled.div`
    top: 75vh;
    left: calc(50vw - 35px);
    height: 156px;
    width: 70px;
    ${constantStyles}
    animation: animationProj0 1.4s;
    @keyframes animationProj0 {
        0% {
            top: calc(50vh - 20px);
        }
        100% {
            top: 75vh;
        }
    }
`

const ProjectorHolder2 = styled.div`
    top: calc(50vh - 20px);
    height: 156px;
    width: 70px;
    left: calc(50vw - 35px);
    ${constantStyles}
    animation: animationProj1 1.4s;
    @keyframes animationProj1 {
        0% {
            top: 75vh;
        }
        100% {
            top: calc(50vh - 20px);
        }
    }
`

const states = [
    <ProjectorHolder1 />,
    <ProjectorHolder2 />,
    <ProjectorHolder2 />,
]

class AnimatedProjector extends Component {
    render() {
        return (
            <FullScreenPosition>
                {this.props.position === -1 ? (
                    <ProjectorHolderInitial />
                ) : (
                    states[this.props.position]
                )}
            </FullScreenPosition>
        )
    }
}

export default AnimatedProjector
