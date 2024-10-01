import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
        min-width: 360px;
        background-color: #191919;
        ;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: ${theme.colors.font}
    }

    ul {
        list-style: none;
        padding: 0;
    }

    button {
        background-color: #42446E;
        border: none;
        cursor: pointer;
        color: ${theme.colors.font};
    }

    section {
        padding: 120px 0;
        background-color: #191919;

        @media ${theme.media.mobile} {
            margin: 80px 0;
        }
    }

    h3 {
        font-size: 32px;
        font-weight: 400;
        color: ${theme.colors.secondFont};
    }
/*
    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
    }*/
`;
