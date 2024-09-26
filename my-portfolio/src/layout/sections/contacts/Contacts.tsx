import React from "react";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <S.Email>o.dubavets@gmail.com</S.Email>
            </Container>
        </S.Contact>
    );
};

/*
                <S.Form>
                    <S.Field placeholder="name"/>
                    <S.Field placeholder="subject"/>
                    <S.Field placeholder="message" as="textarea"/>
                    <Button type="submit">Send message</Button>
                </S.Form>*/