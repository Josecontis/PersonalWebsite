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
  margin-top: 10px;
  margin-left: 220px;
  position: absolute;
  font-family: 'Zen Dots', cursive;
  font-size: 15px;
  width: 50vw;
  
  animation: ${subAnimation} 1s ease-out alternate infinite;
  @media screen and (max-width: 800px) and (orientation: landscape){
    font-size: 20px;
    margin-top: 30px;
    margin-left: 360px;
  }
  @media screen and (max-height: 800px) and (orientation: landscape){
    font-size: 20px;
    margin-top: 30px;
    margin-left: 360px;
  }
`;

export const MonthStyle = styled.span`
  margin-left: 220px;
  bottom: 48%;
  font-weight: bold;
  position: absolute;
  text-transform: uppercase;
  font-family: 'Orbitron';
  font-size: 25px;
  width: 20vw;
  animation: ${dateAnimation} 12s;

  @media screen and (max-width: 800px) and (orientation: landscape){
    font-size: 25px;
    margin-left: 360px;
    bottom: 48%;
  }
  @media screen and (max-height: 800px) and (orientation: landscape){
    font-size: 25px;
    margin-left: 360px;
    bottom: 48%;
  }
`;

export const Container = styled.div`
margin-left: 320px;
margin-top: 350px;
position: absolute;
color: ${props => props.theme.foreground};
user-select: none;
width: auto;

@media screen and (max-width: 800px) and (orientation: landscape){
  display: none;
}
@media screen and (max-height: 800px) and (orientation: landscape){
  display: none;
}

`;

export const DateStyle = styled.div`
  font-size 120px;
  right: 10px;
  position: relative;
  font-family: 'Zen Dots', cursive;
  -webkit-font-smoothing: antialiased;
  -webkit-text-fill-color: rgba(0,0,0,0);
  -webkit-text-stroke-color: ${props => props.theme.date};
  -webkit-text-stroke-width: 5px;

  animation: ${dateAnimation} 36s;
  @media screen and (max-width: 800px) and (orientation: landscape){
    font-size 180px;
  }
  @media screen and (max-height: 800px) and (orientation: landscape){
    font-size 180px;
  }
`;
