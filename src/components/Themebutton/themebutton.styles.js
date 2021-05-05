import styled from 'styled-components';

export const Container = styled.label`
position: relative;
display: inline-block;
  margin-top: 120px;
  margin-left: 20px;
  width: 60px;
  height: 27px;
  z-index: 2;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
 
  transition: .4s;

  background-color: ${props => props.theme.primary};
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    border-radius: 50px;
    height: 26px;
    width: 26px;
    transition: 1s;
    background-color: white;
  }
  ${Checkbox}:checked + & {
    background-color: ${props => props.theme.second};
  }

    ${Checkbox}:checked + &:before {
      transform: translateX(33px);
    }
  
`;