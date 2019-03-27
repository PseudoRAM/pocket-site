import React, { Component } from 'react'
import { Button, Box } from 'grommet'
import styled from 'styled-components'
import Logo from '../images/logo_white.png'

const Holder = props => (
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="transparent"
        elevation="none"
        style={{
            zIndex: '1',
            paddingTop: '10px',
            position: 'absolute',
            width: '100vw',
            top: '0',
            left: '0',
        }}
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
            width: '310px',
            margin: '0px 65px',
            color: '#fff',
            fontSize: '13px',
            fontWeight: '300',
        }}
        {...props}
    />
)

const HeaderLogo = styled.div`
    background-image: url(${Logo});
    width: 120px;
    height: 30px;
    background-repeat: no-repeat;
    margin-left: 65px;
`

class AppBar extends Component {
    showSettings(event) {
        event.preventDefault()
    }

    render() {
        return (
            <Holder>
                <HeaderLogo />
                <HeaderButtons>
                    <Button
                        id="home"
                        className="menu-item"
                        label="home"
                        plain
                        onClick={() => {}}
                    />
                    <Button
                        id="about"
                        className="menu-item"
                        label="about"
                        plain
                        onClick={() => {}}
                    />
                    <Button
                        id="specs"
                        className="menu-item"
                        label="specs"
                        plain
                        onClick={() => {}}
                    />
                    <Button
                        id="action-btn"
                        className="menu-item"
                        label="notify me"
                        onClick={() => {}}
                    />
                </HeaderButtons>
            </Holder>
        )
    }
}

export default AppBar
