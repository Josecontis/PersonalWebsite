import styled, {keyframes} from "styled-components";

const load = keyframes`
  from {
    width: 0%
  }
  to{
    width: 50%;
  }
`;

export const Bar = styled.div`
  background-color: #EEE;
  width: 30%;
  height: 30px;
  margin-left: 60vw;
  margin-top: 30vh;
  border-radius: 15px;
  font-size: 14px;
  color: #FFF;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  
  &::before{
  content:  attr(data-skill);
  background-color: ${props => props.theme.primary};
  display: inline-block;
  height: 20px;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: inherit;
  animation: ${load} 2s 0s;

  &.front:: before{
    background - color: ${props => props.theme.primary};
  }
  
  &.learning:: before{
    width: calc(20 % - 10px);
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