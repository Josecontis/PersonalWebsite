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
  width: 90vw;
  top: -2vw;
  bottom: 0;
  right: 5vw;
  left: 30vw;

  > svg {
    right: 5vw;
    left: auto;
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

  @media screen and (max-width: 800px) and (orientation: landscape){
    display: none;
  }
  @media screen and (max-height: 800px) and (orientation: portrait) {
    display: none;
  }
`;
