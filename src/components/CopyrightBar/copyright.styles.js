import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 87vh;
  bottom: 0;
  height: 42px;
  background: black;
  width: 2350px;
  z-index: 1;
  text-align: center;
  padding: 25px;

  @media screen and (max-width: 800px){
    width: 85px;
  }
`;