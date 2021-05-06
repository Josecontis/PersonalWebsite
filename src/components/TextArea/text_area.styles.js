import styled, { keyframes } from "styled-components";

const toAnimate = keyframes`
0%{
  opacity: 0
}
100%{
  opacity: 1
}
`;

const rubberBand = keyframes`
0% {
  -webkit-transform: scale3d(1,1,1);
  -ms-transform: scale3d(1,1,1);
  transform: scale3d(1,1,1)
}
30% {
  -webkit-transform: scale3d(1.25,.75,1);
  -ms-transform: scale3d(1.25,.75,1);
  transform: scale3d(1.25,.75,1)
}
40% {
  -webkit-transform: scale3d(.75,1.25,1);
  -ms-transform: scale3d(.75,1.25,1);
  transform: scale3d(.75,1.25,1)
}
50% {
  -webkit-transform: scale3d(1.15,.85,1);
  -ms-transform: scale3d(1.15,.85,1);
  transform: scale3d(1.15,.85,1)
}
65% {
  -webkit-transform: scale3d(.95,1.05,1);
  -ms-transform: scale3d(.95,1.05,1);
  transform: scale3d(.95,1.05,1)
}
75% {
  -webkit-transform: scale3d(1.05,.95,1);
  -ms-transform: scale3d(1.05,.95,1);
  transform: scale3d(1.05,.95,1)
}
100% {
  -webkit-transform: scale3d(1,1,1);
  -ms-transform: scale3d(1,1,1);
  transform: scale3d(1,1,1)
}
`;

export const Container = styled.div`
  position: absolute;
  top: 28vh;
  left: 145px;
  user-select: none;
  color: #ffffff;
  font-size: 6vh;
`;

export const Span = styled.span`
  letter-spacing: 0.05em;
  line-height: 7vh;
  font-size: 7.2vh;
  font-family: 'Orbitron', sans-serif, 'Zen Dots', cursive;
  display: inline-block;
  
  &:hover {
    animation: ${rubberBand} 1s ease backwards;
    color: ${props => props.theme.primary};
}

> span {
  margin-left: 0.1em;
  color: ${props => props.theme.second};
}

  @media screen and (max-width: 800px) and (orientation: landscape){
    font-size: 5vw;
    line-height: 5vw;
  }
  @media screen and (max-width: 800px) and (orientation: portrait) {
    font-size: 5vw;
    line-height: 5vw;
  }
`;



export const Sub = styled.h2`
  margin-top: 35px;
  color: #8d8d8d;
  margin-left: 10px;
  font-size: ${props => props.size || ".3em"};
  letter-spacing: 0.1em;
  opacity: 0;
  
  
  &.active {
    animation: ${toAnimate} 2s backwards;
    opacity: 1;
  }

  @media screen and (max-width: 1000px) and (orientation: portrait) {
    font-size: 0.3em;
  }
`;

const deconstructed = keyframes `
  0% {
    transform: translateX(-100%);
    opacity -1;
  }
  100% {
    transform: translateX(0%);
  }
  `;

export const Paragraph = styled.div`
  width: 40vw;
  margin-top: 2vh;
  font-size: 25px;
  animation: ${toAnimate} 1s 2s backwards;
  animation: ${deconstructed} 5s;
  > * {
    margin: 10px auto;
  }

  @media screen and (max-width: 1079px) {
    width: 50vw;
  }

  @media screen and (max-width: 800px) and (orientation: landscape){
    width: 70vw;
    font-size: 0.5em;
  }

  @media screen and (max-height: 820px) and (orientation: portrait) {
    width: 38vh;
    & > p:nth-child(2) {
      display: none;
    }
    & > p:nth-child(4) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  letter-spacing: 0.1em;
  font-size: 5vh;
  font-family: 'Orbitron', sans-serif, 'Zen Dots', cursive;
  font-weight: 100;
  color: ${props => props.theme.primary};

  > span {
    margin-left: 0.1em;
    color: white;
  }

  @media screen and (max-width: 800px) and (orientation: landscape){
    font-size: 5vw;
  }
`;
