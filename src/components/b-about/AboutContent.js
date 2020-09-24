import React from 'react';
import { Skills } from './Skills';
import { AboutIntro } from './AboutIntro';
import { Experience } from './Experience';

export const AboutContent = () => {
  return (
    <>
      <AboutIntro />
      <Skills />
      <Experience />
    </>
  )
};