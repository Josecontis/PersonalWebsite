import styled, { keyframes } from "styled-components";

const svgAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


const svgRotation = keyframes`
0% { opacity: 0; transform: rotate(0); }
100% { opacity: 1; transform: rotate(360deg); }
`;

export const Container = styled.div`
  position: absolute;
  align-items: center;
  height: 90vh;
  display: block;
  user-select: none;
  overflow: hidden;
  width: 60vw;
  top: -2vw;
  bottom: 0;
  left: 40vw;

  > svg {
    max-height: 100vh;
    max-width: 100vw;
    animation: ${svgRotation} 5s;

    *#G {
    animation: ${svgAnimation} 12s;
    animation: ${svgRotation} 5s;
    }
    *#C {
      animation: ${svgAnimation} 36s;
    }
  }

  @media screen and (max-width: 1600px) and (orientation: landscape){
    display: none;
  }
  @media screen and (max-height: 1600px) and (orientation: portrait) {
    display: none;
  }
`;
