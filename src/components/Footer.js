import React from 'react';
import styled from 'styled-components';
import { fonts, useTheme } from '../styles';

const FooterLinkText = styled.h4`
  margin-bottom: 2vw;
  line-height: 1.5em;

  margin-top: 0;
    font-family: ${fonts.primary},sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0;

    line-height: 20px;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: ${props => props.theme.colors.text};
    transition: all .8s cubic-bezier(.77,0,.175,1);
`;

const FooterLink = styled.a`
  padding: 20px;
  -webkit-transition: opacity .5s ease;
  transition: opacity .5s ease;
  text-decoration: none;
  text-transform: uppercase;
  max-width: 100%;
  cursor: pointer;
`;

const FooterContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  justify-self: center;
  align-self: end;
  display: flex;

padding-bottom: 4vw;
transform-origin: 0 0;
`;

export const Footer = () => {
  const { setTheme } = useTheme();
  return (
    <FooterContainer
      onMouseEnter={() => setTheme('light')}
    >
      <FooterLink
        href="https://github.com/mgunsd">
        <FooterLinkText>
          GitHub
      </FooterLinkText>
      </FooterLink>
      <FooterLink
        href="https://www.linkedin.com/in/mark-gun/">
        <FooterLinkText>
          LinkedIn
      </FooterLinkText>
      </FooterLink>
    </FooterContainer >
  )
}
