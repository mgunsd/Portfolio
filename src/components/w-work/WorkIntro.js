import React from 'react';
import styled from 'styled-components';
import { MainSection, H1, A, I, Body, } from 'components/a-commons';

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

const Tags = styled(Body)`
  display:grid;
  grid-auto-columns: 1fr;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-gap:10px;
  opacity:0.7;
  font-size: 0.8vw;
  margin-bottom: 5vw;
`;
const T = styled(I)`
  transform: rotate(90deg);
  padding:5px; 
  opacity:1;
  font-size: 1vw;
`;

export const WorkIntro = () => {
  return (
    <MainSection>
      <Headline as='a' href='https://ppmap.bitbucket.io/'>
        <Hollow >
          PPMAP
        </Hollow> <T> 􀄯</T>
      </Headline>
      <Tags><T> 􀋡 </T> React, React Hooks, React Context, Webpack, Responsive, StyledComponents,
      React Router, Formik, SVG, EvaDesign, Git, Bitbucket, Docker, Jenkins, Jira, Agile,  </Tags>

      <Headline as='a' href='https://github.com/mgunsd/Car-Loan-Calculator/tree/expo-master'>
        CarLoan <T> 􀄯 </T>
      </Headline>
      <Tags><T> 􀋡 </T> React Native, React Hooks, React Context, Expo, Auth, Firebase,
      React Navigation, Theme Context, React Native Reanimated, Axios</Tags>

      <Headline as='a' href='https://www.npmjs.com/package/cra-template-emel'>
        <Hollow>
          EMEL
        </Hollow> <T> 􀄯 </T>
      </Headline>
      <Tags><T> 􀋡 </T> React, NPM Pakage, Public, CRA Template, React Context, React Hooks, Responsive, StyledComponents, GitHub </Tags>


      <Headline as='a' href='https://github.com/mgunsd/pathfinder'>
        Pathfinder<T> 􀄯 </T>
      </Headline>
      <Tags><T> 􀋡 </T> React Native, React Hooks, Expo, Auth, Express Api, JWT, MangoDB, TypeScript, React Context, Theme Context,
      React Navigation    </Tags>

      <Headline as='a' href='https://github.com/mgunsd/scout'>
        <Hollow>
          Scout
        </Hollow> <T> 􀄯 </T>
      </Headline>
      <Tags><T> 􀋡 </T> React Native, React Hooks, React Context, Theme Context,
      React Navigation, Expo, Auth, Firebase  </Tags>

      <Headline as='a' href='https://github.com/mgunsd?tab=repositories'>
        More<T> 􀄯 </T>
      </Headline>
    </MainSection>
  )
};
