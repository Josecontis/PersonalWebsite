import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 25px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 2px;
  right: 0;
  bottom: 0;
 
  transition: .4s;

  background-color: ${props => props.theme.primary};
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    border-radius: 20px;
    height: 25px;
    width: 25px;
    transition: 1s;
    background-color: white;
  }
  ${Checkbox}:checked + & {
    background-color: ${props => props.theme.second};
  }

    ${Checkbox}:checked + &:before {
      transform: translateX(27px);
    }
  
`;