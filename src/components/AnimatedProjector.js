import React, { Component } from 'react'
import styled from 'styled-components'
import Projector from '../images/projector4.png'

const SMALL_SIZE = ['70px', '156px']
const BIG_SIZE = ['210px', '370px']

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
    left: calc(50vw - (${SMALL_SIZE[0]} / 2));
    height: ${SMALL_SIZE[1]};
    width: ${SMALL_SIZE[0]};
    ${constantStyles}
`

const ProjectorHolder1 = styled.div`
    top: 75vh;
    left: calc(50vw - (${SMALL_SIZE[0]} / 2));
    height: ${SMALL_SIZE[1]};
    width: ${SMALL_SIZE[0]};
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
    height: ${SMALL_SIZE[1]};
    width: ${SMALL_SIZE[0]};
    left: calc(50vw - ( ${SMALL_SIZE[0]} / 2 ));
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
            width: ${SMALL_SIZE[0]};
            height: ${SMALL_SIZE[1]};
        }
    }
`

const ProjectorHolderUp2 = styled.div`
    ${ProjectorHolder2}
    animation: animationProj1b 1.4s;
    @keyframes animationProj1b {
        0% {
            width: ${BIG_SIZE[0]};
            height: ${BIG_SIZE[1]};
            left: calc(50vw - (${BIG_SIZE[0]} / 2));
            top: calc(50vh - 40px);
        }
        100% {
            width: ${SMALL_SIZE[0]};
            height: ${SMALL_SIZE[1]};
        }
    }
`

const ProjectorHolder3 = `
    width: ${BIG_SIZE[0]};
    height: ${BIG_SIZE[1]};
    left: calc(50vw - ( ${BIG_SIZE[0]} / 2 ));
    top: calc(50vh - 40px);
    ${constantStyles}
`

const ProjectorHolderDown3 = styled.div`
    ${ProjectorHolder3}
    animation: animationProj2a 1.4s;
    @keyframes animationProj2a {
        0% {
            top: calc(50vh - 20px);
            height: ${SMALL_SIZE[1]};
            width: ${SMALL_SIZE[0]};
            left: calc(50vw - (${SMALL_SIZE[0]} / 2));
        }
        100% {
            width: ${BIG_SIZE[0]};
            height: ${BIG_SIZE[1]};
            left: calc(50vw - (${BIG_SIZE[0]} / 2));
            top: calc(50vh - 40px);
        }
    }
`

const ProjectorHolderUp3 = styled.div`
    ${ProjectorHolder3}
    animation: animationProj2b 1.4s;
    @keyframes animationProj2b {
    }
`

const states = [
    [<ProjectorHolder1 />, <ProjectorHolder1 />],
    [<ProjectorHolderUp2 />, <ProjectorHolderDown2 />],
    [<ProjectorHolderUp3 />, <ProjectorHolderDown3 />],
    [<ProjectorHolderUp3 />, <ProjectorHolderUp3 />],
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
