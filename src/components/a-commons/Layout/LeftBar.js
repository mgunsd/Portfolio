import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Color, Font } from 'utils';
import { H4 } from '../atoms';

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
  width: 80px;
  height: 80px;
  padding: 8px;
  //color: ${Color('text')};
  font: normal 400 24px / 1.5em ${Font('icon')};
  @media (max-width: 991px)
    {
    width: 64px;
    height: 64px;
    }  
`;

const Circle = styled(NavLink)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-style: solid;
  border-width: 1px;
  border-color: ${Color('text')};
  color:${Color('text')};
  border-radius: 50%;
  opacity: 0.4;
   &:hover{
    opacity: 1;
    background-color: ${Color('text')};
    color:${Color('base')};
   }
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
  align-self: center;
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

export const LeftBar = ({ side }) => {
  return (
    <SideContainer>
      <Button ><Circle to='/'>􀍠</Circle></Button>
      {/* <Button><Circle />{􀌇'µe'}</Button> */}
      <Name>Erkam Gundogdu</Name>
      <Label>
        {side}
      </Label>
    </SideContainer >
  )
};
