import styled from 'styled-components';
import { Color, Font } from 'utils';

//Titles
export const Brand = styled.h1`
font: normal bold 128px/156px ${Font('title')};
font-family: ${Font('title')};
color: ${Color('primary')};
`;

//General
export const Body = styled.p`
font: normal normal 18px / 37px ${ Font('body')};
color: ${ Color('body')};
`;