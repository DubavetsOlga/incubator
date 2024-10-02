import styled from "styled-components"
import { theme } from "../../styles/Theme";

const Header = styled.header<{ $showShadow?: boolean }>`
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};
    box-shadow: ${props => props.$showShadow ? "0px 5px #42446E" : "none"};
`;

export const S = {
    Header,
}
