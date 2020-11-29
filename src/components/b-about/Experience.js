import React from 'react';
import styled from 'styled-components';
import { Font } from 'utils';
import { MainSection, Line, H2, A, I, Body, Spacer } from 'components/a-commons';

const Container = styled.div`
    display:grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    margin-bottom:6vw;
    opacity:0.6;
    @media (max-width: 991px){
    }; 
`;
const Head = styled(Container)`
    display:grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    margin-bottom:0px;
    opacity:1;

`;
const Date = styled(Body)`
  text-align:end;
`;
export const Experience = () => {
  return (
    <MainSection>
      <H2>
        Experience
      </H2>
      <Head>
        <Body><A as='a' href='https://www.easypeasyapp.com'> EasyPeasy<I> 􀄯 </I></A>, London, UK</Body>
        <Date>since 10/2020</Date>
      </Head>
      <Line />
      <Container>
        <Body>
          Software Engineer
        </Body>
        <Body>
          <I>∙ </I>	Developed multiplatform mobile app with React Native. <br />
          <I>∙ </I>	Worked on in-app purchases features for Apple AppStore and Google PlayStore.<br />
          <br />
          <I>􀁢 </I> React Native, React, TypeScript, JavaScript, Git, Jira, BitBucket, TDD
      </Body>
      </Container>
      <Head>
        <Body><A as='a' href='https://smartfuture.io'> Smart Future Solutions<I> 􀄯 </I></A>, Reading, UK</Body>
        <Date>09/2018 – 10/2020</Date>
      </Head>
      <Line />
      <Container>
        <Body>
          Frontend Developer
        </Body>
        <Body>
          <I>∙ </I>	Worked as React Developer at Industry scale PPMAP web app. <br />
          <I>∙ </I>	Delivered React Native mobile applications. <br />
          <I>∙ </I>	Developed responsive webpages, landing pages, web profiles. <br />
          <br />
          <I>􀁢 </I> React , React Native, HTML, CSS, JavaScript, Git, Jira, BitBucket, Webpack,
      </Body>
      </Container>
      <Head>
        <Body>Orbis Visio Ltd, Reading, UK</Body>
        <Date>09/2016 – 09/2018</Date>
      </Head>
      <Line />
      <Container>
        <Body>
          Junior Frontend Developer, <br />
          Project Consultant,
        </Body>
        <Body>
          <I>∙ </I>	Managed web content and social media pages for partners, and NGOs. <br />
          <br />
          <I>􀁢 </I> HTML, CSS, JavaScript, Git,
      </Body>
      </Container>
      <Head>
        <Body>Freelance, Newcastle, UK & Turkey </Body>
        <Date>2010 – 09/2016</Date>
      </Head>
      <Line />
      <Container>
        <Body>
          Freelance Developer, <br />
        </Body>
        <Body>
          <I>∙ </I>	Developed engaging webpages with HTML, CSS, and WordPress. <br />
          <br />
          <I>􀁢 </I> HTML, CSS, JavaScript, WordPress,
      </Body>
      </Container>
      <Spacer />
    </MainSection>
  )
};