import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <Name>Volha</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="instagram" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="telegram" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="vk" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="linkedin" height="21px" width="21px" viewBox="0 0 21px 21px"/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Volha Dubavets, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`;

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
`;

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`;

const SocialItem = styled.li`

`;

const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    color: ${theme.colors.accent};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`;

const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;
`;
