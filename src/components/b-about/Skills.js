import React from 'react';
import styled from 'styled-components';
import { Font } from 'utils';
import { MainSection, Line, H2, I, L, Body, Spacer } from 'components/a-commons';

const SkillsContainer = styled.div`
    display:grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin-bottom:6vw;
    opacity:0.6;
    @media (max-width: 991px){
    };
    
`;
const Text = styled(Body)`
    margin-bottom:-1vw;
    text-transform: uppercase;
    font-size: 1vw;
`;

const skills = [
  'HTML', 'CSS', 'JavaScript',
  'React', 'React Native', 'Git',
  'Node JS', 'MangoDB', 'SQL',
  'React Data Visualisation', 'CSS Animations', 'Agile',

]
const learning = [
  'Typescript', 'D3', 'GraphQL',
  'AWS', 'Serverless', 'Git',
  'Swift', 'Phyton', 'R',
]

export const Skills = () => {
  return (
    <MainSection>
      <H2>
        Skills
      </H2>
      <Text>Proficient</Text>
      <Line />
      <SkillsContainer>
        {skills.map((s) => {
          return <L key={s.index}>
            <I>∙ </I>
            {s}
          </L>
        })}
      </SkillsContainer>
      <Text>Learning</Text>
      <Line />
      <SkillsContainer>
        {learning.map((s) => {
          return <L key={s.index}>
            <I>◦ </I>
            {s}
          </L>
        })}
      </SkillsContainer>
      <Spacer />
    </MainSection>
  )
};