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

const ProjectorHolder2 = `
    top: calc(50vh - 20px);
    height: 156px;
    width: 70px;
    left: calc(50vw - 35px);
    ${constantStyles}
`

const ProjectorHolderDown2 = styled.div`
    ${ProjectorHolder2}
    animation: animationProj1a 1.4s;
    @keyframes animationProj1a {
        0% {
            top: 75vh;
        }
        100% {
            top: calc(50vh - 20px);
            width: 70px;
            height: 156px;
        }
    }
`

const ProjectorHolderUp2 = styled.div`
    ${ProjectorHolder2}
    animation: animationProj1b 1.4s;
    @keyframes animationProj1b {
        0% {
            width: 120px;
            height: 200px;
            left: calc(50vw - 45px);
            top: calc(50vh - 40px);
        }
        100% {
            width: 70px;
            height: 156px;
        }
    }
`

const ProjectorHolder3 = `
    width: 120px;
    height: 200px;
    left: calc(50vw - 45px);
    top: calc(50vh - 40px);
    ${constantStyles}
`

const ProjectorHolderDown3 = styled.div`
    ${ProjectorHolder3}
    animation: animationProj2a 1.4s;
    @keyframes animationProj2a {
        0% {
            top: calc(50vh - 20px);
            height: 156px;
            width: 70px;
            left: calc(50vw - 35px);
        }
        100% {
            width: 120px;
            height: 200px;
            left: calc(50vw - 45px);
            top: calc(50vh - 40px);
        }
    }
`

const states = [
    [<ProjectorHolder1 />, <ProjectorHolder1 />],
    [<ProjectorHolderUp2 />, <ProjectorHolderDown2 />],
    [<ProjectorHolder3 />, <ProjectorHolderDown3 />],
]

class AnimatedProjector extends Component {
    render() {
        return (
            <FullScreenPosition>
                {this.props.position === -1 ? (
                    <ProjectorHolderInitial />
                ) : (
                    states[this.props.position][
                        this.props.direction === 'up' ? 0 : 1
                    ]
                )}
            </FullScreenPosition>
        )
    }
}

export default AnimatedProjector
