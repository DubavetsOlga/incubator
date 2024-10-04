import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Logo: React.FC = () => {
    return (
        <StyledLogo href="#">
            <Icon width="60" height="60" viewBox="0 0 122 102" iconId={"logo"}/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    flex-grow: 1;
    color: ${theme.colors.accent};
`;