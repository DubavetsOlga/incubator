import React  from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import socialImg from "./../../../assets/images/proj-1.png";
import timerImg from "./../../../assets/images/proj-2.png";
import { Container } from "../../../components/Container";
import { Work } from "./work/Work";
import { S } from "./Works_Styles"

const workItems = ["ALL", "LANDING PAGE", "REACT", "SPA"];

const workData = [
    {
        title: "Social Network",
        scr: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        scr: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    },
];

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">

                    {workData.map((w, index) => {
                        return <Work key={index}
                            title={w.title}
                            text={w.text}
                            src={w.scr}
                        />
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
