import React from 'react';
import { PageWithLeftSide } from 'components/a-commons';
import { AboutContent } from 'components/b-about';

export const About = () => {
  return (
    <PageWithLeftSide side='Contact'>
      <AboutContent />
    </PageWithLeftSide >
  )
}