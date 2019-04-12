import React, { Component } from 'react'
import { Button, Box } from 'grommet'
import { Menu } from 'grommet-icons'
import styled from 'styled-components'
import Logo from '../images/logo_white.png'
import Sidebar from 'react-sidebar'

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
            height: 44,
        }}
        {...props}
    />
)

const MenuBthHolder = styled.div`
    & button {
        position: absolute;
        left: 20px;
        top: 15px;
        display: none;
    }
    @media (max-width: 630px) {
        & button {
            display: block;
        }
    }
`

const MobileFix = styled.div`
    @media (max-width: 630px) {
        & header {
            display: none;
        }
    }
`

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

const MobileMenuHolder = styled.div`
    color: #fff;
    margin: 10px;
    font-size: 13px;
    text-align: center;
    margin-top: 30px;
    & button {
        width: 100%;
        padding: 6px 5px;
        margin: 3px 0;
    }
`

const HeaderLogo = styled.div`
    background-image: url(${Logo});
    width: inherit;
    height: 30px;
    background-repeat: no-repeat;
    margin-left: 65px;
`

const MobileLogo = styled.div`
    background-image: url(${Logo});
    width: inherit;
    height: 30px;
    background-repeat: no-repeat;
    margin-left: calc((70px -133px) / 2);
`

const Buttons = [
    <Button
        id="home"
        className="menu-item"
        label="home"
        plain
        onClick={() => {}}
    />,
    <Button
        id="about"
        className="menu-item"
        label="about"
        plain
        onClick={() => {}}
    />,
    <Button
        id="specs"
        className="menu-item"
        label="specs"
        plain
        onClick={() => {}}
    />,
    <Button
        id="action-btn"
        className="menu-item"
        label="notify me"
        onClick={() => {}}
    />,
]

class AppBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarOpen: false,
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open })
    }

    showSettings(event) {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <Sidebar
                    sidebar={
                        <MobileMenuHolder>
                            <MobileLogo />
                            {Buttons}
                        </MobileMenuHolder>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: '#1e2128', zIndex: 30 } }}
                />
                <Holder>
                    <MenuBthHolder>
                        <Button
                            icon={<Menu color="#fff" />}
                            plain
                            onClick={() => this.onSetSidebarOpen(true)}
                        />
                    </MenuBthHolder>

                    <HeaderLogo />
                    <MobileFix>
                        <HeaderButtons>{Buttons}</HeaderButtons>
                    </MobileFix>
                </Holder>
            </div>
        )
    }
}

export default AppBar
