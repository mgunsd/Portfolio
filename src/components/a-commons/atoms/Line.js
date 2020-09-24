import styled, { keyframes } from 'styled-components';
import { Color } from 'utils';

const line = keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: 0% 0%;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
  }
`;

export const Line = styled.div`
  //visibility: visible;
  padding-bottom: 2vw;
  border-bottom: 1px solid ${Color('text')};
  opacity: 0.2;
  margin-bottom: 2vw;
  animation: ${line} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @media (max-width: 991px)
  {
    grid-column: 3/9;
  }
`;
