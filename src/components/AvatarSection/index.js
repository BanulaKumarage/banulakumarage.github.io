import React from 'react'
import AvatarBgAnimation from '../AvatarBgAnimation'
import { AvatarContainer, AvatarBg, AvatarLeftContainer, Img, AvatarRightContainer, AvatarInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './AvatarStyle'
import Typewriter from 'typewriter-effect';
import AvatarImg from '../../images/icon.png';
import { Bio } from '../../data/constants';
import { cv } from '../../data/constants'

const AvatarSection = () => {
    return (
        <div id="about">
            <AvatarContainer>
                <AvatarBg>
                    <AvatarBgAnimation />
                </AvatarBg>
                <AvatarInnerContainer >
                    <AvatarLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={cv} target='_blank'>Check Resume</ResumeButton>
                    </AvatarLeftContainer>

                    <AvatarRightContainer id="Right">

                        <Img src={AvatarImg} alt="Avatar-image" />
                    </AvatarRightContainer>
                </AvatarInnerContainer>

            </AvatarContainer>
        </div>
    )
}

export default AvatarSection