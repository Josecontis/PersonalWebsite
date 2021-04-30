import styled, { keyframes } from "styled-components";

const dateAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const subAnimation = keyframes`
  0% {
    opacity: 0;
    filter: blur(1px);
  }
  100% {
    opacity: 1;
  }
`;
export const SubDate = styled.span`
  padding-top: 10px;
  padding-left: 300px;
  position: absolute;
  font-family: 'Zen Dots', cursive;
  font-size: 15px;
  width: 50vw;
  animation: ${subAnimation} 1s ease-out alternate infinite;
  @media screen and (max-width: 800px) and (orientation: landscape){
    font-size: 20px;
    padding-top: 30px;
    padding-left: 360px;
  }
  @media screen and (max-height: 800px) and (orientation: landscape){
    font-size: 20px;
    padding-top: 30px;
    padding-left: 360px;
  }
`;

export const MonthStyle = styled.span`
  padding-left: 300px;
  bottom: 48%;
  font-weight: bold;
  position: absolute;
  text-transform: uppercase;
  font-family: 'Zen Dots', bold;
  font-size: 20px;
  width: 20vw;
  animation: ${dateAnimation} 12s;

  @media screen and (max-width: 800px) and (orientation: landscape){
    font-size: 25px;
    padding-left: 360px;
    bottom: 48%;
  }
  @media screen and (max-height: 800px) and (orientation: landscape){
    font-size: 25px;
    padding-left: 360px;
    bottom: 48%;
  }
`;

export const Container = styled.div`
padding: 19vw 59vw;
position: absolute;
color: #8d8d8d;
user-select: none;

@media screen and (max-width: 800px) and (orientation: landscape){
  display: none;
}
@media screen and (max-height: 800px) and (orientation: landscape){
  display: none;
}

`;

export const DateStyle = styled.div`
  font-size 150px;
  font-family: 'Zen Dots', cursive;
  -webkit-font-smoothing: antialiased;
  -webkit-text-fill-color: rgba(0,0,0,0);
  -webkit-text-stroke-color: ${props => props.theme.primary};
  -webkit-text-stroke-width: 5px;
  display: block;
  animation: ${dateAnimation} 36s;
  @media screen and (max-width: 800px) and (orientation: landscape){
    font-size 180px;
  }
  @media screen and (max-height: 800px) and (orientation: landscape){
    font-size 180px;
  }
`;
