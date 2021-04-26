import styled from "styled-components";

export const Tags = styled.pre`
  top: ${props => (props.top ? props.top + "vh" : "auto")};
  bottom: ${props => (props.bottom ? props.bottom + "vh" : "auto")};
  text-indent: ${props => (props.indent ? props.indent + "px" : "0")};

  position: absolute;
  left: 100px;
  color: #515152;
  font-size: 20px;
  font-family: 'Dancing Script', cursive;
  font-family: 'Pacifico', cursive;
  user-select: none;

  @media screen and (max-width: 800px) and (orientation: landscape){
    &:nth-child(1n) {
      top: ${props => (props.top ? props.top + "vw" : "auto")};
      bottom: ${props => (props.bottom ? props.bottom + "vw" : "auto")};
    }
  }

  @media screen and (max-width: 800px) and (orientation: portrait){
    left: 70px;
    font-size: 12px;
    &:nth-child(n) {
      text-indent: ${props => (props.indent ? props.indent + "px" : "0")};
    }
    &:nth-child(3) {
      text-indent: ${props => (props.indent ? props.indent + "px" : "0")};
    }
    &:nth-child(4) {
      text-indent: ${props => (props.indent ? props.indent + "px" : "0")};
      top: ${props =>
        props.top && props.home ? props.top -1 +"vh" : props.top-100 + "vh"};
    }
  }
`;
