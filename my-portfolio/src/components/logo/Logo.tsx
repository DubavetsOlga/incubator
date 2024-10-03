import React from "react";
import { Icon } from "../icon/Icon";

export const Logo: React.FC = () => {
    return (
        <a href="#" style={{flexGrow: 1}}>
            <Icon width="60" height="60" viewBox="0 0 122 102" iconId={"logo"}/>
        </a>
    );
};
