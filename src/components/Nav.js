import React from 'react';
//import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { fonts, useTheme } from 'styles';
import { useWindowSize } from 'hooks/useWindowSize';

const NavLabel = styled.div`
  font: normal bold 15vw/1em ${fonts.primary},sans-serif;
  text-transform: uppercase;
  transition: letter-spacing .8s cubic-bezier(.77,0,.175,1);
  transition: font-size .5s cubic-bezier(.77,0,.175,1);
  font-weight: 700;
 opacity:1;
  &:hover {
    //letter-spacing: -0.03em;
    //font-size: 16vw;
    /* transition: letter-spacing .8s cubic-bezier(.77,0,.175,1);
    transition: font-size .8s cubic-bezier(.77,0,.175,1); */

  }
  /* @media (max-width: 768px ){

  } */

`;
const NavNo = styled.h6`
  font: normal bold 12px/20px ${fonts.primary},sans-serif;
  margin-top: 2.6vw;
  margin-right: auto;
  margin-left: .25vw;
  font-weight: 500;
 
  &:hover {
  letter-spacing: -.02em;}
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;

`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: flex;
  padding-top: 1vw;
  text-decoration: none;
  align-items: flex-start;
  justify-content: flex-start;
  opacity:0.6;
  max-width: 100%;
  filter: blur(5px);
  transition: all .8s cubic-bezier(.77,0,.175,1);
  &:hover {
  opacity:1;    
  filter: blur(0px);

  }
  @media (max-width: 768px ){
    opacity:1;
    position: relative;
    left: 1.5vw;
    margin-right: auto;
    margin-left: auto;
    flex-direction: row;
    -webkit-box-orient: horizontal;
    align-self: stretch;
  }
`;
const NavDash = styled.div`
  margin-top: 8vw;
  margin-bottom: 8vw;
  width: 4vw;
  height: 2px;
  margin-right: 5vw;
  margin-left: 5vw;
  background-color: ${props => props.theme.colors.text};
  opacity:0.5;
  @media (max-width: 768px ){
    width: 80vw;
    height: 1px;
    margin: 5vw 0;
  }

`;
const NavContiner = styled(animated.div)`
  transform-style: preserve-3d;
  
  will-change: transform;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  background-attachment: scroll!important;
  /* &:hover {
  opacity:0.5;
  } */
  @media (max-width: 768px ){
   flex-direction: column;
   -webkit-box-orient: vertical;
  }

`;
const Nv = styled.nav`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;  
  align-self: center;
  
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  perspective: 1000px;
  overflow: hidden;

  opacity: 1;
  transform: translate3d(-50%, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  @media (max-width: 768px ){
    padding-left: 0;
  }
`;
// const org0 = { mass: 10, tension: 550, friction: 140 }
// const fast = { tension: 1200, friction: 40 }
// const slow = { mass: 10, tension: 200, friction: 50 }
const org = { mass: 20, tension: 550, friction: 140 }
export const Nav = () => {
  //const ref = useRef();
  //scale3d(${((1 + (((Math.abs(x)) + 2) / 50))) }, 1, 1)
  const size = useWindowSize();
  const { setTheme } = useTheme();
  const calc = (x) => 45 - ((x / window.innerWidth) * 90);
  const trans = (x) => `translate3d(${x}%, 0%, 0px)
   `
  //  const trans = (x) => `translate3d(${x}%, 0%, 0px) rotateY(${-x / 10}deg) 
  //  skew(${-x / 20}deg, ${x / 30}deg)
  //   `
  const [props, set] = useSpring(() => ({ x: 0, config: org }))

  return (
    <Nv>
      <NavContiner
        //ref={ref}
        onMouseEnter={() => setTheme('dark')}
        onMouseMove={({ clientX: x }) => set({ x: calc(x) })}
        style={(size.width > 768) ?
          { transform: props.x.interpolate(trans) } : { transform: 'null' }} >
        <NavLink href="about/">
          <NavLabel>About</NavLabel>
          <NavNo>01</NavNo></NavLink>
        <NavDash />
        <NavLink href="work/" >
          <NavLabel>Work</NavLabel>
          <NavNo>02</NavNo></NavLink>
        <NavDash />
        <NavLink href="contact/">
          <NavLabel>Contact</NavLabel>
          <NavNo>03</NavNo></NavLink>
      </NavContiner>
    </Nv >
  )
};