import styled from "styled-components"
import { theme } from "../../../styles/Theme";
import photo from "../../../assets/images/Abstract.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Main = styled.section`
    position: relative;

    ${FlexWrapper} {
        min-height: 630px;

        @media ${theme.media.mobile} {
            min-height: 300px;
        }
    }
`;

const Text = styled.p`
    font-size: 58px;
    font-weight: 700;
    letter-spacing: -1px;
    flex-grow: 1;

    max-width: 636px;

    @media ${theme.media.mobile} {
        font-size: 30px;
    }
`;

    /*${font({weight: 700, Fmax: 58, Fmin: 48})};*/

const Name = styled.span`
    background: -webkit-linear-gradient(${theme.colors.grad});
    background-clip: unset;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Photo = styled.img`
    width: 349px;
    height: 349px;
    object-fit: cover;

    border-image-source: linear-gradient(${theme.colors.grad});
    border: 9px solid #0000;
    border-radius: 230px;
    background: linear-gradient(${theme.colors.grad}) border-box;
    background-clip: border-area;

    @media ${theme.media.tablet} {
        width: 300px;
        height: 300px;
    }

    @media ${theme.media.mobile} {
        display: none;
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

        @media ${theme.media.mobile} {
            display: none;
        }
    }
`;

export const S = {
    Main,
    Photo,
    Text,
    Name,
    ImgContainer,
}
