import styled from 'styled-components';
import myImage from './Rectangle1.svg';

export const StyledImage = styled.image`
    display: inline-block;
    width: 280px;
    height: 170px;
    border-radius: 10px;
    background-image: url(${myImage});
    margin: 10px;
`;