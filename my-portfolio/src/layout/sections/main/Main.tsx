import React  from "react";
import { S } from "./Main_Styles"
import { Container } from "../../../components/Container";
import photo from "../../../assets/images/myphoto4.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <S.Text>
                        Hi 👋, <br/>
                        My name is<br/>
                        <S.Name>Volha Dubavets</S.Name><br/>
                        <Typewriter
                                options={{
                                    strings: ["I build things for web."],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                    </S.Text>
                    <S.ImgContainer>
                        <Tilt>
                            <S.Photo src={photo} alt="" />
                        </Tilt>
                    </S.ImgContainer>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
