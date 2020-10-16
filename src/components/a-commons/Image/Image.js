import React from 'react';
import styled from 'styled-components';
//import { Color } from 'utils';
// background: #2c2a2a;
// box-shadow:  5px 5px 10px #282626, 
//              -5px -5px 10px #302e2e;

const Imag = styled.img`
//border-radius: .4em;
border-top: 0.1em solid #302e2e;
border-left: 0.1em solid #302e2e;
border-bottom: 0.1em solid #282626;
border-right: 0.1em solid #282626;
margin: .9em 0;
`;

export const Image = (props) => {
  return (
    <div style={{ ...props.style }}>
      <Imag alt='logo' src={props.src} width="100%" />
    </div>
  )
}