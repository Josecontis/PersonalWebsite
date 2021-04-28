import styled, {keyframes} from "styled-components";

const load = (perc) =>  keyframes`
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

export const Bar = styled.div`
  border-radius: 10px;
  background: ${props => props.theme.background};
  height: 25px;
  
  animation: ${props => load(props.perc)} 5s normal forwards;
  background: linear-gradient(-45deg, ${props => props.theme.background}, ${props => props.theme.background},${props => props.theme.second}, ${props => props.theme.primary});
  

  &::after {
    letter-spacing: 0.2em;
    font-family: 'Orbitron';
    font-weight: bold;
    font-size: 16px;
    color: white;
    content: '${props => props.perc}';
  }
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

export const BarList = styled.div`
  height: 30px;
  align-items: center;
  padding: 2px 2px;
  display: flex;
  position: relative;
  background: ${props => props.theme.primary};
  border-radius: 10px;
  width: 30%;
  margin-left: 60vw;
  margin-top: 30vh;
  animation: ${barAnimation} 5s;
  transition: box-shadow .5s;

  &:hover {
    box-shadow: 0 0 14px ${props => props.theme.second};
  }
 
  @media screen and (max-width: 1600px) and (orientation: landscape){
    display: none;
  }
  @media screen and (max-height: 1600px) and (orientation: portrait) {
    display: none;
  }
`;

export const Text = styled.h4`
letter-spacing: 0.05em;
font-size: 20px;

@media screen and (max-width: 1000px) and (orientation: landscape){
  font-size: 5vw;
  line-height: 5vw;
}
@media screen and (max-width: 1000px) and (orientation: portrait) {
  font-size: 5vw;
  line-height: 5vw;
}
`;