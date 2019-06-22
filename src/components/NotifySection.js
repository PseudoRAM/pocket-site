import React, { Component } from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

// import Specs from '../images/specs.png'

const Content = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

const sideBoarderConstraints = `
    height: 100vh;
    width: 71px;
    position: absolute;
    background-color: #fff;
`

const LeftBoarder = styled.div`
    ${sideBoarderConstraints}
    left: 0;
    top: 0;
`

const RightBoarder = styled.div`
    ${sideBoarderConstraints}
    right: 0;
    top: 0;
`

const boarderConstraints = `
    width: 100vw;
    height: 170px;
    position: absolute;
    background-color: #fff;
`

const TopBoarder = styled.div`
    ${boarderConstraints}
    left: 0;
    top: 0;
`

const BottomBoarder = styled.div`
    ${boarderConstraints}
    left: 0;
    bottom: 0;
`

const ContentHolder = styled.div`
    position: relative;
    height: 100vh;
`

const url =
    'https://gmail.us20.list-manage.com/subscribe/post?u=8813adc25a5508ab5299133d9&id=bb4f9cf9d4'

const Form = () => <MailchimpSubscribe url={url} />

class NotifySection extends Component {
    render() {
        return (
            <div className="section">
                <Content>
                    <ContentHolder>
                        <Form />
                        <LeftBoarder />
                        <RightBoarder />
                        <TopBoarder />
                        <BottomBoarder />
                    </ContentHolder>
                </Content>
            </div>
        )
    }
}

export default NotifySection
