import React  from "react";
import { S } from "./Main_Styles"
import { Container } from "../../../components/Container";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                main section
            </Container>
        </S.Main>
    );
};
