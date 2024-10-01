import React from "react";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./Slogan_Styles";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";


export const Slogan: React.FC = () => {
    return (
        <S.Slogan>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <SectionTitle>I Am Available For Work</SectionTitle>
                    <Button>Contact me</Button>
                </FlexWrapper>
            </Container>
        </S.Slogan>
    );
};
