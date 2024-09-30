import styled from "styled-components"
import { theme } from "../../../styles/Theme";

const About = styled.div`
    img {
        width: auto;
        height: 520px;
        margin-right: 20px;
        border-radius: 20px;
    }
`;

const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 20px;
    color: ${theme.colors.secondFont};
    text-align: justify;
`;


export const S = {
    About,
    Description,
}
