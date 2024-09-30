import React  from "react";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles"
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionInfo } from "../../../components/SectionInfo";

const skillData = [
    { iconId: "html", },
    { iconId: "css",  },
    { iconId: "js", },
    { iconId: "react", },
    { iconId: "redux", },
    { iconId: "bootstrap", },
    { iconId: "git", },
    { iconId: "typescript", },
    { iconId: "styledcomponents", }, //40 40 120 120
    { iconId: "figma", },
    { iconId: "materialui" },
    { iconId: "saas" },
];

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <FlexWrapper align={"center"} direction="column">
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionInfo>Technologies I’ve been working with recently</SectionInfo>
                    <FlexWrapper align="center" wrap="wrap" justify="space-around">
                        {skillData.map((s, index) => {
                            return <S.Skill>
                                <Icon key={index} iconId={s.iconId}/>
                            </S.Skill>
                        })}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
