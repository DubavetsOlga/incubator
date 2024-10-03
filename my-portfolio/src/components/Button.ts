import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    height: 40px;
    padding: 0 20px;
    border-radius: 6px;
    background-color: #42446E;

    position: relative;
    z-index: 0;

    transition: ${theme.animations.transition};

    @media ${theme.media.desktop} {
        &:hover {
            transform: translateY(-0.3rem);
            box-shadow: rgba(255, 255, 255, 0.2) 0 4px 10px;
        }
    }
`;
