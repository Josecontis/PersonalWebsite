import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 87vh;
  bottom: 0;
  height: 8vh;
  background: black;
  width: 100vw;
  z-index: 1;
  text-align: center;
  padding: 3vh;
  font-size: 1.3vh;
  font-family: 'Orbitron', sans-serif, 'Zen Dots', cursive;

  @media screen and (max-width: 800px){
    width: 85px;
  }
`;