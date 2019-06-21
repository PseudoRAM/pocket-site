import React, { Component } from 'react'
import styled from 'styled-components'
import Projector from '../images/projector4-c.png'

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
            top: calc((100vh - (60vh * 0.4164013015184382)) / 2 - 30px);
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
    top: calc((100vh - (60vh * 0.4164013015184382)) / 2 - 30px);
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
            top: calc((100vh - (60vh * 0.4164013015184382)) / 2 - 30px);
        }
    }
`

const ProjectorHolderUp3 = styled.div`
    ${ProjectorHolder3}
    animation: animationProj2b 1.4s;
    @keyframes animationProj2b {
        0% {
            top: calc(50vh - (${BIG_SIZE[1]} / 3));
        }
        100% {
            top: calc((100vh - (60vh * 0.4164013015184382)) / 2 - 30px);
        }
    }
`

const ProjectorHolder4 = `
    width: ${BIG_SIZE[0]};
    height: ${BIG_SIZE[1]};
    left: calc(50vw - ( ${BIG_SIZE[0]} / 2 ));
    top: calc(50vh - ( ${BIG_SIZE[1]} / 3));
    opacity: 1;
    ${constantStyles}
`

const ProjectorHolderDown4 = styled.div`
    ${ProjectorHolder4}
    animation: animationProj3a 1.4s;
    @keyframes animationProj3a {
        0% {
            top: calc((100vh - (60vh * 0.4164013015184382)) / 2 - 30px);
        }
        100% {
            top: calc(50vh - (${BIG_SIZE[1]} / 3));
        }
    }
`

const ProjectorHolderUp4 = styled.div`
    ${ProjectorHolder4}
    animation: animationProj3b 1.4s;
    @keyframes animationProj3b {
        100% {
            opacity: 1;
            top: calc(50vh - (${BIG_SIZE[1]} / 3));
        }
        0% {
            opacity: 0;
            top: calc(${BIG_SIZE[1]} / -2 + 80px);
        }
    }
`

const ProjectorHolder5 = `
    ${ProjectorHolder4}
    opacity: 0;
    top: calc(${BIG_SIZE[1]} / -2 + 80px);
`

const ProjectorHolderDown5 = styled.div`
    ${ProjectorHolder5}
    animation: animationProj4a 1.4s;
    @keyframes animationProj4a {
        100% {
            opacity: 0;
            top: calc(${BIG_SIZE[1]} / -2 + 80px);
        }
        0% {
            opacity: 1;
            top: calc(50vh - (${BIG_SIZE[1]} / 3));
        }
    }
`

const ProjectorHolderUp5 = styled.div`
    ${ProjectorHolder5}
    animation: animationProj4b 1.4s;
    @keyframes animationProj4b {
        100% {
            opacity: 0;
        }
        0% {
            opacity: 1;
        }
    }
`

const states = [
    [<ProjectorHolder1 />, <ProjectorHolder1 />],
    [<ProjectorHolderUp2 />, <ProjectorHolderDown2 />],
    [<ProjectorHolderUp3 />, <ProjectorHolderDown3 />],
    [<ProjectorHolderUp4 />, <ProjectorHolderDown4 />],
    [<ProjectorHolderUp5 />, <ProjectorHolderDown5 />],
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
