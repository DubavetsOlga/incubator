import React from "react";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./Contacts_Styles";
import { Button } from "../../../components/Button";

export const Contacts: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder="name"/>
                    <S.Field placeholder="subject"/>
                    <S.Field placeholder="message" as="textarea"/>
                    <Button type="submit">Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
