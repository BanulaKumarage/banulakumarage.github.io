import React from 'react'
import AvatarBgAnimation from '../AvatarBgAnimation'
import { AvatarContainer, AvatarBg, AvatarLeftContainer, Img, AvatarRightContainer, AvatarInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './AvatarStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

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
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </AvatarLeftContainer>

                    <AvatarRightContainer id="Right">

                        <Img src="https://avatars.githubusercontent.com/u/63106638?s=400&u=5bef349b89a8cfa2899099530cf209ee65730cff&v=4" alt="Avatar-image" />
                    </AvatarRightContainer>
                </AvatarInnerContainer>

            </AvatarContainer>
        </div>
    )
}

export default AvatarSection