import styled from "styled-components"
import { theme } from "../../../styles/Theme";
import photo from "../../../assets/images/Abstract.svg";

const Main = styled.section`

`;

const Text = styled.p`
    font-size: 58px;
    font-weight: 700;
    letter-spacing: -1px;

    max-width: 636px;

    @media ${theme.media.mobile} {
        font-size: 36px;
    }
`;

const Name = styled.span`
    background: -webkit-linear-gradient(180deg, #E70FAA -2.06%, #13B0F5 100%);
    background-clip: unset;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Photo = styled.img`
    width: 349px;
    height: 349px;
    object-fit: cover;

    border-image-source: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
    border: 9px solid #0000;
    border-radius: 230px;
    background:linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%) border-box;
    background-clip: border-area;

    @media ${theme.media.tablet} {
        width: 300px;
        height: 300px;
    }
`;

const ImgContainer = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        content: url(${photo});
        position: absolute;
        z-index: 0;
        top: -40%;
        left: -40%;
        z-index: 0;
    }
`;

export const S = {
    Main,
    Photo,
    Text,
    Name,
    ImgContainer,
}
