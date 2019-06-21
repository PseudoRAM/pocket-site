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
            zIndex: '99',
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

class AppBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarOpen: false,
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
        this.setButtons = this.setButtons.bind(this)
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open })
    }

    showSettings(event) {
        event.preventDefault()
    }

    setButtons() {
        const btns = [
            <Button
                id="home"
                key="b1"
                className="menu-item"
                label="home"
                plain
                onClick={() => {
                    this.props.api.moveTo(1)
                    if (this.state.sidebarOpen) this.onSetSidebarOpen(false)
                }}
            />,
            <Button
                id="about"
                key="b2"
                className="menu-item"
                label="about"
                plain
                onClick={() => {
                    this.props.api.moveTo(2)
                    if (this.state.sidebarOpen) this.onSetSidebarOpen(false)
                }}
            />,
            <Button
                id="specs"
                key="b3"
                className="menu-item"
                label="specs"
                plain
                onClick={() => {
                    this.props.api.moveTo(3)
                    if (this.state.sidebarOpen) this.onSetSidebarOpen(false)
                }}
            />,
            <Button
                id="action-btn"
                key="b4"
                className="menu-item"
                label="notify me"
                onClick={() => {}}
            />,
        ]
        return btns
    }

    render() {
        return (
            <div>
                <Sidebar
                    sidebar={
                        <MobileMenuHolder>
                            <MobileLogo />
                            {this.setButtons()}
                        </MobileMenuHolder>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    children={null}
                    styles={{ sidebar: { background: '#1e2128', zIndex: 100 } }}
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
                        <HeaderButtons>{this.setButtons()}</HeaderButtons>
                    </MobileFix>
                </Holder>
            </div>
        )
    }
}

export default AppBar
