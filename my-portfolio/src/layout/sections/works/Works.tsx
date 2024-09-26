import React  from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionInfo } from "../../../components/SectionInfo";
import { Work } from "./work/Work";
import workImg from "./../../../assets/images/work.png";

const workData = [
    {
        title: "Project Tile goes here",
        scr: workImg,
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg,
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg,
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg,
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg,
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg,
        techStack: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
];

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <FlexWrapper align={"center"} direction="column">
                    <SectionTitle>Projects</SectionTitle>
                    <SectionInfo>Things I’ve built so far</SectionInfo>
                    <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">

                        {workData.map((w, index) => {
                            return <Work key={index}
                                title={w.title}
                                text={w.text}
                                techStack={w.techStack}
                                src={w.scr}
                            />
                        })}

                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
