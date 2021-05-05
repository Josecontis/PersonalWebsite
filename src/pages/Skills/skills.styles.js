import styled, { keyframes } from "styled-components";

const load = (perc) => keyframes`
0% { 
  width: 0; 
}
100% { 
  width: ${perc};
} 
`;

const barAnimation = keyframes`
0% {
  transform: translateX(100%);
  opacity -5;
}
100% {
  transform: translateX(0%);
  opacity 1;
}
`;

const percStyles = props => {
  return props.perc > 90 ? 'color: white;' :'color: black;';
};

export const BarList = styled.div`
  width: 30%;
  margin-left: 60vw;
  margin-top: 30vh;
`;
export const BarContent = styled.div`
  border-radius: 10px;
  background: ${props => props.theme.background};
  height: 25px;
  
  animation: ${props => load(props.perc)} 5s 3.5s normal forwards;
  background: linear-gradient(-45deg, ${props => props.theme.background}, ${props => props.theme.background},${props => props.theme.second}, ${props => props.theme.primary});
  
  &::before{
    letter-spacing: 0.2em;
    font-family: 'Orbitron';
    font-weight: bold;
    font-size: 16px;
    color: ${props => props.theme.background};
    content: '${props => props.skill}';
    
    margin-left: 7px;
    align-items: center;
    padding: 2px 2px;
    display: flex;
    position: relative;
    animation: ${barAnimation} 3s;

  }    
`;

export const BarComponent = styled.div`
  height: 30px;
  margin-top: 30px;
  align-items: center;
  padding: 2px 2px;
  display: flex;
  position: relative;
  background: ${props => props.theme.primary};
  border-radius: 10px;

  animation: ${barAnimation} 8s;
  transition: box-shadow 0.1s;

  &::after{
    letter-spacing: 0.2em;
    font-family: 'Orbitron';
    font-weight: bold;
    font-size: 16px;
    ${percStyles}
    
    position: absolute;
    right: 5px;

    content: '${props => props.perc}%';
  }

  &:hover {
    box-shadow: 0 0 30px ${props => props.theme.second};
  }
 
  @media screen and (max-width: 1600px) and (orientation: landscape){
    display: none;
  }
  @media screen and (max-height: 1600px) and (orientation: portrait) {
    display: none;
  }
`;
