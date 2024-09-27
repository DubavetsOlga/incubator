import React  from "react";
import { Button } from "../../../../components/Button";
import { S } from "./../Works_Styles"
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";

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
                <S.Stack>Tech stack : <S.Stacks>{props.techStack}</S.Stacks></S.Stack>
                <br/>
                <FlexWrapper justify="space-between">
                    <a href={"#"}><Icon width="20" height="20" viewBox="0 0 20 20" iconId="git"/>Live Preview</a>
                    <a href={"#"}><Icon width="20" height="20" viewBox="0 0 20 20" iconId="git"/>View Code</a>
                </FlexWrapper>
            </S.Description>
        </S.Work>
    );
};
