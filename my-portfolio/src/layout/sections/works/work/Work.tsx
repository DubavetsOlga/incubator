import React  from "react";
import { Button } from "../../../../components/Button";
import { S } from "./../Works_Styles"

type WorkPropsType = {
    title: string;
    text: string;
    src: string;
    techStack: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.Image src={props.src} alt={""}/>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Stack>Tech stack : {props.techStack}</S.Stack>
                <br/>
                <a href={"#"}>Live Preview</a>
                <a href={"#"}>View Code</a>
            </S.Description>
        </S.Work>
    );
};
