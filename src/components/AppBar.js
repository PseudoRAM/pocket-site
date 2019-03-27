import React, { Component } from 'react'
import { Button, Box } from 'grommet'
import styled from 'styled-components'

const Holder = props => (
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="transparent"
        elevation="none"
        style={{ zIndex: '1' }}
        {...props}
    />
)

const HeaderButtons = props => (
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        style={{
            width: 'justify-content',
            padding: '0 10px',
            color: '#fff',
            fontSize: '18px',
        }}
        {...props}
    />
)

const HeaderLogo = styled.h1`
    color: #fff;
`

class AppBar extends Component {
    render() {
        return (
            <Holder>
                <HeaderLogo>Pocket Graphics</HeaderLogo>
                <HeaderButtons>
                    <Button label="home" plain onClick={() => {}} />
                    <Button label="about" plain onClick={() => {}} />
                    <Button label="notify me" onClick={() => {}} />
                </HeaderButtons>
            </Holder>
        )
    }
}

export default AppBar
