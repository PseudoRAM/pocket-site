import React, { Component } from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import FBIcon from '../images/icon_fb.png'
import InstaIcon from '../images/icon_insta.png'
import TwitterIcon from '../images/icon_twitter.png'
import Logo from '../images/logo.png'
import Space from '../images/space3.jpg'

// import Specs from '../images/specs.png'

const Content = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

const SpaceHolder = styled.div`
    width: 80vw;
    height: calc(100vh - 15vh - 170px);

    position: absolute;
    top: 15vh;
    left: 10vw;

    background-image: url(${Space});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const sideBoarderConstraints = `
    height: 100vh;
    /* max-width: 71px; */
    position: absolute;
    background-color: #fff;
    width: 10vw;
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
    max-height: 170px;
    position: absolute;
    background-color: #fff;
`

const TopBoarder = styled.div`
    ${boarderConstraints}
    left: 0;
    top: 0;
    height: 15vh;
`

const BottomBoarder = styled.div`
    ${boarderConstraints}
    left: 0;
    bottom: 0;
    height: 170px;
`

const ContentHolder = styled.div`
    position: relative;
    height: 100vh;
`

const SocialHolder = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
const IconHolder = styled.div`
    width: 25px;
    margin: 0 20px;
    text-align: center;
`

const Icon = styled.img`
    height: 25px;
    width: auto;
    cursor: pointer;
`

const LogoHolder = styled.img`
    margin-left: 50vw;
    transform: translateX(-50%);
    width: 100px;
    height: auto;

    position: absolute;
    bottom: 40px;
    left: 0;
`

const url =
    'https://gmail.us20.list-manage.com/subscribe/post?u=8813adc25a5508ab5299133d9&id=bb4f9cf9d4'

const InputHolder = styled.div`
    position: relative;
    display: block;
    margin: 0 5vw;
`

const InputField = styled.input`
    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    -webkit-appearance: none;
    color: inherit;
    padding: 14px 0;
    padding-left: 25px;
    outline: none;
    background: #fff;
    margin: 0px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.33);
    border-image: initial;
    border-radius: 4px;
    width: 70vw;
`

const SubmitButton = styled.div`
    position: absolute;
    top: 4px;
    right: 7px;
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    font: inherit;
    text-decoration: none;
    margin: 0;
    overflow: visible;
    text-transform: none;
    background: rgb(245, 194, 175);
    border-radius: 6px;
    color: rgba(164, 113, 96, 1);
    padding: 4px 22px;
    border: 0;
    font-size: 13px;
    line-height: 30px;
`

const CustomForm = ({ status, message, onValidated }) => {
    let email
    const submit = () =>
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
        })

    return (
        <div
            style={{
                borderRadius: 2,
                display: 'inline-block',
            }}
        >
            {status === 'sending' && (
                <div style={{ color: 'blue' }}>sending...</div>
            )}
            {status === 'error' && (
                <div
                    style={{ color: 'red' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === 'success' && (
                <div
                    style={{ color: 'green' }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <InputHolder>
                <InputField
                    ref={node => (email = node)}
                    type="email"
                    placeholder="Enter e-mail"
                />
                <SubmitButton onClick={submit}>Subscribe</SubmitButton>
            </InputHolder>
        </div>
    )
}

const Form = () => (
    <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
            />
        )}
    />
)

class NotifySection extends Component {
    render() {
        return (
            <div className="section">
                <Content>
                    <ContentHolder>
                        <LeftBoarder />
                        <RightBoarder />
                        <TopBoarder />
                        <BottomBoarder>
                            <SocialHolder>
                                <IconHolder>
                                    <Icon src={InstaIcon} />
                                </IconHolder>
                                <IconHolder>
                                    <Icon src={FBIcon} />
                                </IconHolder>
                                <IconHolder>
                                    <Icon src={TwitterIcon} />
                                </IconHolder>
                            </SocialHolder>
                            <LogoHolder src={Logo} />
                        </BottomBoarder>
                        <SpaceHolder>
                            <Form />
                        </SpaceHolder>
                    </ContentHolder>
                </Content>
            </div>
        )
    }
}

export default NotifySection
