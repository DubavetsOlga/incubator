import React  from "react";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles"
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

const skillData = [
    { iconId: "code", },
    { iconId: "code",  },
    { iconId: "code", },
    { iconId: "code", },
    { iconId: "code", },
    { iconId: "code", },
    { iconId: "code", },
    { iconId: "code", },
    { iconId: "code", },
    { iconId: "code", },
    { iconId: "code", },
];

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <FlexWrapper align={"center"} direction="column">
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <S.Text>Technologies I’ve been working with recently</S.Text>
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
