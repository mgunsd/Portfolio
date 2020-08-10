import React from 'react';
import styled from 'styled-components';
import { fonts, useTheme } from '../styles';

const HeaderSubtitle = styled.h5`
  opacity: .5;

  margin-top: 0;
  font-family: ${fonts.primary},sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0;
  margin-bottom: 0;

  line-height: 20px;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: ${props => props.theme.colors.text};
  transition: all .8s cubic-bezier(.77,0,.175,1);

`;

const HeaderName = styled.h4`
  margin-bottom: 2vw;
  line-height: 1.5em;

  margin-top: 0;
  font-family: ${fonts.primary},sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0;

  line-height: 20px;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: ${props => props.theme.colors.text};
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

export const Cursor = () => {
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

//Magnify
* { box- sizing: border - box;}

.img - magnifier - container {
  position: relative;
}

.img - magnifier - glass {
  position: absolute;
  border: 3px solid #000;
  border - radius: 50 %;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 100px;
  height: 100px;
}

///



.cursor,
.cursor_container {
  display: -webkit - box;
  display: -webkit - flex;
  display: -ms - flexbox;
}
.circle_outer_mask,
.loader_spinner {
  border - style: solid;
  border - radius: 50 %;
}
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z - index: 1000;
  display: flex;
  -webkit - justify - content: center;
  -ms - flex - pack: center;
  justify - content: center;
  -webkit - box - align: center;
  -webkit - align - items: center;
  -ms - flex - align: center;
  align - items: center;
  border - radius: 50 %;
}
.footer_link_text {
  opacity: 1;
}
.cursor_circle {
  width: 100 %;
  height: 100 %;
  border - style: solid;
  border - width: 2px;
  border - color: #2c2a2a;
  border - radius: 50 %;
  opacity: 0.4;
}
.circle_outer_mask,
.cursor_circle.white {
  border - color: #f2efe8;
}
.cursor_container {
  position: absolute;
  display: flex;
  width: 120px;
  height: 120px;
  -webkit - box - pack: center;
  -webkit - justify - content: center;
  -ms - flex - pack: center;
  justify - content: center;
  -webkit - box - align: center;
  -webkit - align - items: center;
  -ms - flex - align: center;
  align - items: center;
  border - radius: 50 %;
}
.circle_outer,
.link--white {
  display: -webkit - box;
  display: -webkit - flex;
  display: -ms - flexbox;
}





<div class="cursor">
  <div
    data-w-id="ec29f54e-cbc0-c2fb-5a6d-771af183c174"
    style="opacity: 1;"
    class="cursor_container"
  >
    <div
      data-w-id="c686ad41-194c-cfe5-31d8-82fb1facfa5b"
      style="opacity: 0.4;"
      class="cursor_circle"
    ></div>
  </div>
</div>
  <div class="w-embed">
    <style>
      .cursor {
        pointer - events: none;
        }
      </style>
  </div>