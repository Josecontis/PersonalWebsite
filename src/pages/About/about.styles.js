import styled from "styled-components";

  export const Text = styled.h4`
  letter-spacing: 0.05em;
  font-size: 20px;
 
  @media screen and (max-width: 800px) and (orientation: landscape){
    font-size: 5vw;
    line-height: 5vw;
  }
  @media screen and (max-width: 800px) and (orientation: portrait) {
    font-size: 5vw;
    line-height: 5vw;
  }
`;