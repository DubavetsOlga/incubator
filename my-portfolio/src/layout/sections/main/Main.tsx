import React  from "react";
import { S } from "./Main_Styles"
import { Container } from "../../../components/Container";
import photo from "../../../assets/images/myphoto.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <S.Text>
                        Hi 👋, <br/>
                        My name is<br/>
                        <S.Name>Volha Dubavets</S.Name><br/>
                        I build things for web
                    </S.Text>
                    <S.Photo src={photo} alt="" />
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
