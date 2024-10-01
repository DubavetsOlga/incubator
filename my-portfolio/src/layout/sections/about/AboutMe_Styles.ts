import styled from "styled-components"
import { theme } from "../../../styles/Theme";

const About = styled.section`
    position: relative;

    img {
        max-width: 30%;
        max-height: 500px;
        object-fit: cover;

        margin-right: 20px;
        border-radius: 20px;

        @media ${theme.media.tablet} {
            display: none;
        }
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
