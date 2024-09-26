import styled from "styled-components"

const Main = styled.section`

`;

const Text = styled.p`
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;

    max-width: 636px;
`;

const Name = styled.span`
    background: -webkit-linear-gradient(180deg, #E70FAA -2.06%, #13B0F5 100%);
    background-clip: unset;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Photo = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 230px;
    object-fit: cover;
    border: 9px solid;
    border-image-source: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    /*@media  {
        width: 310px;
        height: 380px;
    }*/
`;

export const S = {
    Main,
    Photo,
    Text,
    Name,
}
