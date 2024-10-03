import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contact = styled.section`
    position: relative;
`;

const Email = styled.span`
    background: -webkit-linear-gradient(180deg, #E70FAA -2.06%, #13B0F5 100%);
    background-clip: unset;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: "DM Sans", sans-serif;
    font-size: 58px;
    font-weight: 700;
    letter-spacing: -1px;
    text-align: center;

    display: block;
`;

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`;

const Field = styled.input`
    width: 100%;
    background-color: #252527;
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;

    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`;

export const S = {
    Contact,
    Form,
    Field,
    Email,
}
