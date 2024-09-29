import React, { useState }  from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import socialImg from "./../../../assets/images/proj-1.png";
import timerImg from "./../../../assets/images/proj-2.png";
import { Container } from "../../../components/Container";
import { Work } from "./work/Work";
import { S } from "./Works_Styles"
import { AnimatePresence, motion } from "framer-motion"

const tabItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    },
];

const worksData = [
    {
        title: "Social Network",
        scr: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa"
    
    },
    {
        title: "Timer",
        scr: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react"
    },
];

export const Works: React.FC = () => {
    const [currentFilterStatus, setcurrentFilterStatus] = useState("all");

    const filteredWorks = worksData.filter((work) =>
        currentFilterStatus === 'all' ? true : work.type === currentFilterStatus,
    );

    function changeFilterStatus(value: TabsStatusType) {
        setcurrentFilterStatus(value);
    }

    return (
        <S.Works id="works">
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu 
                    tabItems={tabItems}
                    changeFilterStatus={changeFilterStatus}
                    currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
                    <AnimatePresence>
                        {filteredWorks.map((w, index) => {
                            return (
                                <motion.div
                                    style={{ width: "400px", flexGrow: 1, maxWidth: "540px" }}
                                    layout
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    exit={{ opacity: 0}}
                                    key={index}
                                >
                                    <Work key={index}
                                        title={w.title}
                                        text={w.text}
                                        src={w.scr}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
