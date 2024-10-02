import React  from "react";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles"
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionInfo } from "../../../components/SectionInfo";
import { Fade } from "react-awesome-reveal";

const skillData = [
    { iconId: "html", title: "HTML5" },
    { iconId: "css", title: "CSS" },
    { iconId: "js", title: "JavaScript" },
    { iconId: "react", title: "React" },
    { iconId: "redux", title: "Redux" },
    { iconId: "bootstrap", title: "Bootstrap" },
    { iconId: "git", title: "Git" },
    { iconId: "typescript", title: "TypeScript" },
    { iconId: "figma", title: "Figma" },
    { iconId: "materialui", title: "Material UI" },
    { iconId: "saas", title: "SAAS" },
];

export const Skills: React.FC = () => {
    return (
        <S.Skills id="skills">
            <Container>
                <FlexWrapper align="center" direction="column">
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SectionInfo>Technologies I’ve been working with recently</SectionInfo>
                    <FlexWrapper align="center" wrap="wrap" justify="space-around" style={{gap:"60px"}}>
                        <Fade cascade damping={0.2}>
                            {skillData.map((s, index) => {
                                return <S.Skill key={index}>
                                    <Icon iconId={s.iconId} width="120" height="120" viewBox="0 0 48 48"/>
                                    <S.Title>{s.title}</S.Title>
                                </S.Skill>
                            })}
                        </Fade>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
