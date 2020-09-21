import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Color } from 'utils';
import logo from 'assets/images/reactlogo.svg'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AnimatedLogo = styled.img`
  color: ${Color('primary')};
  border: none;
  animation: ${rotate} infinite 20s linear;
`;

export const Logo = (props) => {
  return (
    <div style={{ ...props.style }}>
      <AnimatedLogo alt='logo' src={logo} height="200" />
    </div>
  )
}