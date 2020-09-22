import React from 'react';
import styled from 'styled-components';
import { Color, Font } from 'utils';
import { H1, H4, I, Body } from '../Text';

const SideContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: grid;
  padding: 4vw;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  @media (max-width: 991px)
    {
    position: absolute;
    left: 0;
    right: 0;
    bottom: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    }
`;

const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 80px;
  height: 80px;
  padding: 8px;
  color: ${Color('text')};
  font: normal 400 24px / 1.5em ${Font('icon')};
  @media (max-width: 991px)
    {
    width: 64px;
    height: 64px;
    }  
`;

const Circle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-style: solid;
  border-width: 1px;
  border-color: ${Color('text')};
  border-radius: 50%;
  opacity: 0.4;
`;

const Name = styled(H4)`
  justify-self: center;
  align-self: center;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  @media (max-width: 991px)
    {
      transform: none;
      writing-mode:horizontal-tb;
    }  
`;

const Label = styled(H4)`
  justify-self: center;
  align-self: end;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  opacity: .5;
  transform: rotate(180deg);
  @media (max-width: 991px)
    {
      transform: none;
      writing-mode:horizontal-tb;
    }  
`;



export const LeftSide = ({ side }) => {
  return (
    <SideContainer>
      <Button as='a' href='/'><Circle />􀍠</Button>
      {/* <Button><Circle />{􀌇'µe'}</Button> */}
      <Name>Erkam Gundogdu</Name>
      <Label>
        {side}
      </Label>

    </SideContainer>
  )
};

const Container = styled.div`
  display:grid;

  grid-template-columns: 4vw 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4vw;
  grid-template-rows: auto auto auto auto;
  width: 100%;
  height: 100vh;
  background-color: ${Color('base')};
  padding-top: 12vw;
  padding-bottom: 12vw;
  @media (max-width: 767px){
    padding-top: 40vw;
    padding-bottom: 40vw;
  }; 
`;

const Headline = styled(H1)`
    grid-column: 5/9;
    grid-row: 1/2;
    @media (max-width: 991px)
    {
      grid-column: 3/9;
      font-size: 10vw;
    }
`;

const MailContainer = styled.div`
    grid-column: 5/9;
    grid-row: 2/3;
    display:grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    @media (max-width: 991px){
    grid-column: 3/9;
  };
`;
const Mail = styled(Body)`
  grid-column: 2/3;
  grid-row: 1/2;
  padding-right: 2vw;
  justify-self: start;
  text-decoration: none;
  @media (max-width: 991px){
    font: normal 400 2vw / 1.5em ${Font('title')};
  };
  @media (max-width: 767px){
    grid-column: 1/3;
    font-size: 2.7vw;
  }; 
`;

const TextContainer = styled.div`
    grid-column: 5/9;
    grid-row: 3/4;
    display:grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    @media (max-width: 991px){
    grid-column: 3/9;
    };
    
`;
const Text = styled(Body)`
    grid-column: 2/3;
    grid-row: 1/2;
    padding-right: 2vw;
    justify-self: start;
    text-decoration: none;
    font: normal 400 1vw / 1.5em ${Font('title')};
    @media (max-width: 991px){
      font: normal 400 2vw / 1.5em ${Font('title')};
    };
    @media (max-width: 767px){
      grid-column: 1/3;
      font-size: 2.7vw;
    };    
`;


export const PageWithLeftSide = ({ children, side }) => {
  return (
    <Container>
      <LeftSide side={side} />
      <Headline>
        {children}
      </Headline>
      <MailContainer>
        <Mail as='a' href="mailto:mgunsd@gmail.com ?subject=Let's%20Work%20Together">
          mgunsd@gmail.com <I>􀄯</I>
        </Mail>
      </MailContainer>
      <TextContainer>
        <Text >
          Reach out at the email above and share some basic info about your project, budget, and timeline. I'll get back to you as soon as possible.
          <br />
          <br />
          Cheers,
          <br />
          Erkam
        </Text>
      </TextContainer>
    </Container>
  )
};