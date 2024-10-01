import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn: React.FC = () => {

    const [showBtn, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowButton(window.scrollY > 200);
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon
                        iconId={"arrowGoTop"}
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                    />
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8;
    position: fixed;
    right: 30px;
    bottom: 30px;
`;