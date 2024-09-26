import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

const Footer = styled.footer`
    padding: 40px 0;

    ${FlexWrapper} {
        position: relative;

        &::before {
            content: "";
            position: absolute;
            border-top: 2px solid #42446E;
            top: -40px;
            left: 0;
            width: 100%;
        }
    }
`;

const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
`;

const ColorText = styled.span`
    background: -webkit-linear-gradient(180deg, #E70FAA -2.06%, #13B0F5 100%);
    background-clip: unset;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const S = {
    Footer,
    Text,
    ColorText,
}