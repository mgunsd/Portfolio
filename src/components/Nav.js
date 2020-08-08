import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../styles';
import { useSpring, animated } from 'react-spring';

const NavLabel = styled.div`
  font: normal bold 15vw/1em ${fonts.primary},sans-serif;
  text-transform: uppercase;
  transition: letter-spacing .8s cubic-bezier(.77,0,.175,1);
  font-weight: 700;

  &:hover {
    letter-spacing: -0.03em;
  }

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
  color:${colors.text};
  cursor: pointer;

  display: flex;
  padding-top: 1vw;
  text-decoration: none;
  align-items: flex-start;
  justify-content: flex-start;
  
  max-width: 100%;
  /* -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start; */
  
`;
const NavDash = styled.div`
  margin-top: 8vw;
  margin-bottom: 8vw;
  width: 4vw;
  height: 2px;
  margin-right: 5vw;
  margin-left: 5vw;
  background-color: ${colors.text};

`;
const NavContiner = styled(animated.div)`
  transform: translate3d(3.01728%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  will-change: transform;
  
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  
  /* display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center; */
  

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
  
`;


export const Nav = () => {
  const [pos, setPos] = useState(0);

  const calc = (x) => 45 - ((x / window.innerWidth) * 90);
  const trans = (x) => `translate3d(${x}%, 0%, 0px) `

  const [props, set] = useSpring(() => ({ x: 0, config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <div
      onMouseMove={({ clientX: x }) => setPos(calc(x))}
    >{pos}
      <Nv >
        <NavContiner
          //ref={ref}
          onMouseMove={({ clientX: x }) => set({ x: calc(x) })}
          style={{ transform: props.x.interpolate(trans) }} >
          <NavLink href="about/" >
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
      </Nv ></div>
  )
};



// -webkit - text - stroke: 2px black; /* width and color */

// font - family: sans; color: yellow;