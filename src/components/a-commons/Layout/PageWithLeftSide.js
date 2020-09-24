import React from 'react';
import styled from 'styled-components';
import { Color } from 'utils';
import { LeftBar } from './LeftBar';

const Container = styled.div`
  display:grid;
  grid-template-columns: 4vw 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4vw;
  grid-template-rows: auto auto auto auto;
  width: 100%;
  background-color: ${Color('base')};
  padding-top: 12vw;
  padding-bottom: 12vw;
  @media (max-width: 767px){
    padding-top: 40vw;
    padding-bottom: 40vw;
  }; 
`;


export const PageWithLeftSide = ({ children, side }) => {
  return (
    <Container>
      <LeftBar side={side} />
      {children}
    </Container>
  )
};