import React from 'react';
import styled from 'styled-components';
import { Color, Font } from 'utils';
import { MainSection, H1, A, I, Body, Image } from 'components/a-commons';
import carloandark from 'assets/images/carloandark.png';
import ppmap from 'assets/images/ppmap.png';
import emel from 'assets/images/emel.png';
import active from 'assets/images/active.png';
import easypeasy from 'assets/images/easypeasy.png';

const Headline = styled(H1)`
  grid-column: 5/9;
  margin-bottom: 2vw;
  text-decoration: none;
  @media (max-width: 991px)
  {
    grid-column: 3/9;
    font-size: 10vw;
  }
`;

const Hollow = styled.span`
  color: transparent;
  text-decoration: none;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #f2efe8;
`;

const Tags = styled.p`
  color: ${Color('text')};
  font: normal 400 1vw / 1.5em ${Font('title')};
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-decoration: none;
  @media (max-width: 991px){
    font-size: 2vw;
  };
  @media (max-width: 767px){
    font-size: 2.7vw;
  }; 

  display:grid;
  grid-auto-columns: 1fr;
  grid-template-columns: auto 1fr;
  grid-gap:10px;
  opacity:0.7;
  font-size: 0.8vw;
  margin-bottom: 5vw;
`;
const T = styled(I)`
  color: ${Color('text')};
  font: normal 400 1vw / 1.5em ${Font('icon')};
  /* @media (max-width: 991px){
    font-size: 2vw;
  };
  @media (max-width: 767px){
    font-size: 2.7vw;
  };  */  
  /* //-webkit-transform: translateZ(0) scale(1.0, 1.0);
  transform: rotateZ(90deg); */
 
  opacity:1;
  font-size: 1vw;
`;

export const WorkIntro = () => {
  return (
    <MainSection>
       <Headline as='a' href='https://www.easypeasyapp.com'>
        EasyPeasy
        <I> 􀄯</I>
      </Headline>
      <Image src={easypeasy} />
      <Tags><T> # </T> React Native, React Hooks, React Context, Redux, TypeScript,
      React Navigation, Git, Bitbucket, Jira, Agile,  </Tags>

      <Headline as='a' href='https://github.com/mgunsd/Car-Loan-Calculator/tree/expo-master'>
        <Hollow >CarLoan  </Hollow>
        <I> 􀄯 </I>
      </Headline>
      <Image src={carloandark} />
      <Tags><T> # </T> React Native, React Hooks, React Context, Expo, Auth, Firebase,
      React Navigation, Theme Context, React Native Reanimated, Axios</Tags>

      <Headline as='a' href='/work'>
        PPMAP
        <I> 􀄯</I>
      </Headline>
      <Image src={ppmap} />
      <Tags><T> # </T> React, React Hooks, React Context, Webpack, Responsive, StyledComponents,
      React Router, Formik, SVG, EvaDesign, Git, Bitbucket, Docker, Jenkins, Jira, Agile,  </Tags>

      <Headline as='a' href='https://www.npmjs.com/package/cra-template-emel'>
        <Hollow>
          EMEL
        </Hollow> <I> 􀄯 </I>
      </Headline>
      <Image src={emel} />
      <Tags><T> # </T> React, NPM Package, Public, CRA Template, React Context, React Hooks, Responsive, StyledComponents, GitHub </Tags>

      <Headline as='a' href='https://github.com/mgunsd/scout'>
        Activity
        <I> 􀄯 </I>
      </Headline>
      <Image src={active} />
      <Tags><T> # </T> React Native, React Hooks, React Context, Theme Context,
          React Navigation, Expo, Auth, Firebase</Tags>

      <Headline as='a' href='https://github.com/mgunsd/pathfinder'>
        <Hollow>
          Pathfinder
        </Hollow>
        <I> 􀄯 </I>
      </Headline>
      <Tags><T> # </T> React Native, React Hooks, Expo, Auth, Express Api, JWT, MongoDB, TypeScript, React Context, Theme Context,
      React Navigation</Tags>

      <Headline as='a' href='https://github.com/mgunsd?tab=repositories'>
        More
        <I> 􀄯 </I>
      </Headline>
    </MainSection>
  )
};
