import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";


export type TabsStatusType = "mainskills" | "skills" | "experience" | "education";

type TabMenuPropsType = {
    tabItems: Array<{status: TabsStatusType, title: string}>,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: string
};

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <a onClick={() => {props.changeFilterStatus(item.status)}}>
                                {item.title}
                            </a>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: center;
       /* max-width: 352px;*/
        width: 100%;
        margin: 0 auto 40px;
        gap: 20px;
    }
`;

const ListItem = styled.li`
    a {
        font-size: 18px;
    }
`;
