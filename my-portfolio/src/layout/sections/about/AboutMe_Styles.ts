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

        border-image-source: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
        border: 2px solid #0000;
        background:linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%) border-box;
        background-clip: border-area;

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
