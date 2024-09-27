import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

export const Socials: React.FC = () => {
    return (
        <List>
            <li><Icon width="30" height="30" viewBox="0 0 30 30" iconId="git"/></li>
            <li><Icon width="30" height="30" viewBox="0 0 30 30" iconId="twitter"/></li>
            <li><Icon width="30" height="30" viewBox="0 0 30 30" iconId="linkedin"/></li>
        </List>
    );
};

const List = styled.ul`

    gap: 20px!important;
`;
