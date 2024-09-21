import styled from "styled-components"
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
    text-align: center;
    letter-spacing: 5px;
    ${font({family: '"Josefin Sans", sans-serif', weight: 600, Fmax: 36, Fmin: 30})};

    margin-bottom: 90px;
    position: relative;

    &&::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);

        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`;
