import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

export const Socials: React.FC = () => {
    return (
        <List>
            <li><a href="https://www.instagram.com"><Icon width="30" height="30" viewBox="0 0 30 30" iconId="git"/></a></li>
            <li><a href="https://www.instagram.com"><Icon width="30" height="30" viewBox="0 0 25 25" iconId="instagram"/></a></li>
            <li><a href="#"><Icon width="30" height="30" viewBox="0 0 30 30" iconId="linkedin"/></a></li>
        </List>
    );
};

const List = styled.ul`
    gap: 20px!important;
`;
