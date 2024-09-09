import React from 'react';
import './App.css';
import { StyledImage }  from './components/Image.styled';
import { StyledButton } from './components/Button.styled';
import { StyledHeader } from './components/Header.styled';
import { StyledText }   from './components/Text.styled';
import { StyledCard }   from './components/Card.styled';

function App() {
  return (
    <StyledCard>
      <StyledImage/>
      <StyledHeader>Headline</StyledHeader>
      <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
      <StyledButton>See more</StyledButton>
      <StyledButton>Save</StyledButton>
    </StyledCard>
  );
}

export default App;
