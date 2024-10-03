import styled from "styled-components"
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Header = styled.header<{ $showShadow?: boolean }>`
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};
    box-shadow: ${props => props.$showShadow ? `0px 2px ${theme.colors.accent}` : "none"};

    ${FlexWrapper} {
        gap: 30px;
    }
`;

export const S = {
    Header,
}
