import styled from 'styled-components';

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
  
  transition: all .8s cubic-bezier(.77,0,.175,1);
  background-color: ${props => props.theme.colors.base};
  
  &:-webkit-scrollbar {
    width: 0;
    background: 0 0;
  }
  @media (max-width: 768px ){
  padding-top: 8vw;
  height: 100%;
  min-height: 100vh;
  grid-auto-columns: 1fr;
  }
`;