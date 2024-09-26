import styled from "styled-components"

const Main = styled.section`

`;

const Text = styled.p`
    font-size: 58px;
    font-weight: 700;
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
    object-fit: cover;

    border-image-source: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
    border: 9px solid #0000;
    border-radius: 230px;
    background:linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%) border-box;
    background-clip: border-area;

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
