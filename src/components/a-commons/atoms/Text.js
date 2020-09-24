import styled, { css } from 'styled-components';
import { Color, Font } from 'utils';

//Master text styles
export const Typography = css`
color: ${Color('text')};
`;

//o1 H1
export const H1 = styled.h1`
font: normal 400 7vw / .9em ${Font('title')};
letter-spacing: -0.47px;
margin: .67em 0;
text-transform: uppercase;
${Typography}
`;

export const H2 = styled.h2`
  font: normal 400 3.2vw / .9em ${Font('title')};
  padding: 1vw 0;
  margin: .83em 0;
  text-transform: uppercase;
  @media (max-width: 991px)
    {
      grid-column: 3/9;
      font-size: 4.4vw;;
    }
  ${Typography}
`;

export const I = styled.i`
  font: normal 400 1vw / 1.5em ${Font('icon')};
  ${Typography}
  @media (max-width: 991px){
    font-size: 2vw;
  };
  @media (max-width: 767px){
    font-size: 2.7vw;
  }; 
`;

export const Regular = css`
  font: normal 400 1vw / 1.5em ${Font('title')};
  //display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-decoration: none;
  ${Typography}
  @media (max-width: 991px){
    font-size: 2vw;
  };
  @media (max-width: 767px){
    font-size: 2.7vw;
    grid-column: 1/3;
  }; 
`;

export const Body = styled.p`
  ${Regular}
`;
export const A = styled.a`
  ${Regular}
`;
export const L = styled.p`
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  ${Regular}
`;

export const H4 = styled.h4`
font: normal 400 16px / 1.5em ${Font('title')};
text-transform: uppercase;
${Typography}
`;
