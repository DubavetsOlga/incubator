import styled from "styled-components"
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Works = styled.section`
    ${FlexWrapper} > ${FlexWrapper} {
        gap: 46px;
    }
`;

//Work

const Work = styled.div`
    width: 30%;
    flex-grow: 1;

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

const Title = styled.h3`
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
    color: #CCCCCC;
`;

const Text = styled.p`
    margin: 14px 0 10px;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    color: #CCCCCC;
`;

const Description = styled.div`
    padding: 25px 20px;
`;

const Stack = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #CCCCCC;
`;

export const S = {
    Works,
    Work,
    Image,
    Title,
    Text,
    Description,
    Stack
}
