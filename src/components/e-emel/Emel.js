import React from 'react';
import { GridCenter, Brand, Body, Logo } from 'components/a-commons';

export const Emel = () => {
  return (
    <GridCenter style={{ backgroundColor: '#393e46', placeItems: 'center', }}>
      <Logo />
      <Brand>
        eµel
      </Brand>
      <Body>
        Emel: /ˌem.el/ n.
        aim, hope, dream, ambition, wish, view, goal, desire
      </Body>
    </GridCenter>
  )
};