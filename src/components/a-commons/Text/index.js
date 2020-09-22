import styled, { css } from 'styled-components';
import { Color, Font } from 'utils';

//Master text styles
export const Typography = css`
color: ${Color('text')};
`;

//o1 H1
export const H1 = styled.h1`
font: normal 400 7vw / .9em ${Font('title')};
letter-spacing: -0.47px;
margin: .67em 0;
text-transform: uppercase;
${Typography}
`;

export const I = styled.i`
font: normal normal 16px / 1.7em ${Font('icon')};
${Typography}
`;

export const Body = styled.p`
font: normal 400 16px / 1.7em ${Font('title')};
${Typography}
`;
// //o2 H2
// export const H2 = styled.h2`
// font: normal bold 32px / 40px ${Font('title')};
// ${Typography}
// `;
// //o3 H3
// export const H3 = styled.h3`
// font: normal bold 30px / 40px ${Font('title')};
// ${Typography}
// `;
//o4 H4
export const H4 = styled.h4`
font: normal 400 16px / 1.5em ${Font('title')};
text-transform: uppercase;
${Typography}
`;
// //o5 H5
// export const H5 = styled.h5`
// font: normal bold 22px/32px ${Font('title')};
// ${Typography}
// `;
// //o6 H6
// export const H6 = styled.h6`
// font: normal bold 18px / 24px ${Font('title')};
// ${Typography}
// `;
// //S1 Subtitle
// export const S1 = styled.h6`
// font: normal 600 15px / 24px ${Font('title')};
// ${Typography}
// `;
// //S2 Subtitle
// export const S2 = styled.h6`
// font: normal 600 13px / 24px ${Font('title')};
// ${Typography}
// `;

// //P1 Body
// export const Body = styled.p`
// font: normal normal 15px / 24px ${Font('body')};
// letter-spacing: -0.22px;
// ${Typography}
// `;
// //P2 Body
// export const Body2 = styled.p`
// font: normal normal 13px / 18px ${Font('body')};
// ${Typography}
// `;

// //c1 Caption
// export const C1 = styled.p`
// font: normal normal 12px / 16px ${Font('body')};
// ${Typography}
// `;
// //c2 Caption Label
// export const C2 = styled.p`
// font: normal 600 12px / 16px ${Font('body')};
// ${Typography}
// `;
// //Label !! designers prefer semibold (600) the the original bold//
// export const Label = styled.label`
// font: normal 600 12px / 16px ${Font('body')};
// ${Typography}
// `;

// //Button Text styles are defined in the ButtonStyles.js