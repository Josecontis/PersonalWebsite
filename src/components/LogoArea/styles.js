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
  height: 90vh;
  overflow: hidden;
  width: 90vw;
  top: 0;
  bottom: 0;
  right: 5vw;
  left: 30vw;

  > svg {
    right: 5vw;
    left: auto;
    max-height: 90vh;
    max-width: 100%;
    animation: ${svgRotation} 5s;

    *#G {
      
      animation: ${svgAnimation} 12s;
     animation: ${svgRotation} 5s;
    }
    *#C {
      animation: ${svgAnimation} 36s;
      
    }
  }

  @media(max-width: 1079px) {
    display: none;
  }

  @media(max-width: 1359px) {
    right: 2vh;
    > svg {
      right: 2vh;
    }
  }
}
`;
