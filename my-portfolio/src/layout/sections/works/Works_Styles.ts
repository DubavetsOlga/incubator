import styled from "styled-components"
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Works = styled.section`
    position: relative;

    ${FlexWrapper} > ${FlexWrapper} {
        gap: 46px;
    }
`;

//Work

const Work = styled.div`
    width: 30%;
    flex-grow: 1;
    min-width: min(360px, calc(100vw - 30px));
    text-align: justify;

    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
    background: rgb(54, 54, 54);

    @media ${theme.media.desktop} {
        max-width: 375px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
`;

const Title = styled.h4`
    font-size: 28px;
    font-weight: 500;
    line-height: 0.9;

    @media ${theme.media.mobile} {
        font-size: 24px;
    } 
`;

const Text = styled.p`
    margin: 14px 0 10px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;

    @media ${theme.media.mobile} {
        font-size: 16px;
    } 
`;

const Description = styled.div`
    padding: 25px 20px;
`;

const Stack = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 20px;
    display: inline-block;

    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`;

const Stacks = styled.span`
    font-size: 14px;
    font-weight: 300;
    line-height: 1.8;

    @media ${theme.media.mobile} {
        font-size: 13px;
    }
`;

const Links = styled.div`
    display: flex;

    a {
        color: white;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
        display: flex;
        align-items: center;

        @media ${theme.media.mobile} {
            font-size: 14px;
        } 
    }

    a + a {
        margin-left: 60px;
    }

    a span {
        margin-left: 10px;
        transition: ${theme.animations.transition};

        &:hover {
            background: -webkit-linear-gradient(180deg, #E70FAA -2.06%, #13B0F5 100%);
            background-clip: unset;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transform: scale(1.05);
        }
    }
`;

export const S = {
    Works,
    Work,
    Image,
    Title,
    Text,
    Description,
    Stack,
    Stacks,
    Links,
}
