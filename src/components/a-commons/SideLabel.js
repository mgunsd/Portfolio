import React from 'react';
import styled from 'styled-components';
import { Color } from 'utils';

const SideLabel = styled.div`
  background-color: ${Color('base')};
  writing-mode: vertical-rl;


  margin-bottom: 2vw;
  margin-top: 0;
  
  font: normal 400 16px / 20px ${Font('title')};

  text-transform: uppercase;
  letter-spacing: 0;

  line-height: 20px;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: ${Color('text')};
  transition: all .8s cubic-bezier(.77,0,.175,1);
`;



