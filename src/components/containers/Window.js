import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Window = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  height: 100vh;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  position: relative;
  width: 100%;
  perspective: 1000px;
  overflow: hidden;
  /* align-items: center;
  justify-content: center;
  overflow: hidden; */
  
  background-color: ${props => props.dark ? colors.dark : colors.light};
  /* -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr; */
  &:-webkit-scrollbar {
    width: 0;
    background: 0 0;
  }
`;