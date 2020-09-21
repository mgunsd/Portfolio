import React from 'react';
import styled from 'styled-components';
import { Color, Font } from 'utils';
import { useTheme } from 'styles';


const HeaderSubtitle = styled.h5`
  opacity: .5;
  margin-top: 0;
  font: normal 400 16px / 20px ${Font('title')};
  text-transform: uppercase;
  letter-spacing: 0;
  margin-bottom: 0;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: ${Color('text')};
  transition: all .8s cubic-bezier(.77,0,.175,1);

`;

const HeaderName = styled.h4`
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

const HeaderContainer = styled.div`
  justify-self: center;
  padding-top: 4vw;
  transform-origin: 0 0;
  text-align: center;

  grid-column-start: 1;
  grid-column-end: 2;
  align-self: start;
  grid-row-start: 1;
  grid-row-end: 2;
  @media (max-width: 768px ){
    padding-top: 8vw;
    height: 100%;
    }
`;

export const Header = () => {
  const { setTheme } = useTheme();
  return (
    <HeaderContainer
      onMouseEnter={() => setTheme('light')}
    >
      <HeaderName>
        M Erkam Gundogdu
      </HeaderName>
      <HeaderSubtitle>
        Frontend Developer & Scientist<br />at Reading, United Kingdom
      </HeaderSubtitle>
    </HeaderContainer >
  )
}
