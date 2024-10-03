import React, { useEffect, useState } from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { S } from "./Header_Styles"
import { Socials } from "../../components/socials/Socials";


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowShadow(window.scrollY > 1);
        })
    }, []);

    return (
        <S.Header $showShadow={showShadow}>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    {
                        width < breakpoint
                        ? <><Socials/><MobileMenu/></>
                        : <><DesktopMenu/><Socials/></>
                    }
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
