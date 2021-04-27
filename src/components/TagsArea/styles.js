import styled from "styled-components";

export const Tags = styled.pre`
  top: ${props => (props.top ? props.top + "vh" : "auto")};
  text-indent: ${props => (props.indent ? props.indent + "em" : "0")};

  position: absolute;
  left: 100px;
  color: #515152;
  font-size: 20px;
  font-family: 'Dancing Script', cursive;
  font-family: 'Pacifico', cursive;
  user-select: none;
  display: block;

  @media screen and (max-width: 1000px) and (orientation: landscape){
    font-size: 2vw;
    top: ${props => (props.top ? props.top + "vh" : "auto")};
    text-indent: ${props => (props.indent ? props.indent -20 + "vw" : "0")};
  }
  @media screen and (max-width: 1000px) and (orientation: portrait) {
    font-size: 2vw;
    &:nth-child(6){
    top: ${props => (props.top ? props.top -9 + "vh" : "auto")};
    text-indent: ${props => (props.indent ? props.indent -20 + "vw" : "0")};
  }
}
  
`;
