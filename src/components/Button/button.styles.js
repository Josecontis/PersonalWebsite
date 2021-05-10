import styled, { keyframes, css } from "styled-components";

const toAnimate = keyframes`
0%{
  opacity: 0
}
100%{
  opacity: 1
}
`;

const homeStyles = css`
  margin-top: 40px;
  font-size: 0.4em;
  letter-spacing: 0.1em;
  padding: 0.5em 1em;
`;

const isContact = css`
  margin-top: 10px;
  font-size: 0.7em;
  letter-spacing: 0.1em;
  padding: 0.5em 1em;
`;

const getButtonStyles = props => {
  return props.isContact ? isContact : homeStyles;
};

export const Button = styled.button`
  background: ${props => props.theme.background};
  color: ${props => props.theme.button};
  opacity: 0;
  display: inline-block;
  
  cursor: pointer;
  font-family: 'Orbitron', sans-serif, 'Zen Dots', cursive;

  border: 2px solid ${props => props.theme.button};
  
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
  transition: ease-out 0.5s all;

  ${getButtonStyles}

    &.active {
      animation: ${toAnimate} 5s backwards;
      opacity: 1;
    }
    
    &:hover {
      color: ${props => props.theme.background};
      box-shadow: 300px 0 0 0 ${props => props.theme.button} inset,-300px 0 0 0 ${props => props.theme.button} inset;
}

@media screen and (max-width: 1000px) and (orientation: portrait) {
  font-size: 0.3em;
}
`;