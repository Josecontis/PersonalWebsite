import styled from "styled-components";

export const Container = styled.form`
  display: flex:
  flex-direction: column:
`;

export const Label = styled.label`
  flex: 1;
  
`;

export const Input = styled.input`
  width: ${props => props.width || "47%"};
  height: 4em;
  margin: 2% 2%;
  border: 0;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  margin-left: 0px;
  border-radius: 0.3em;
  background: #8d8d8d;
  padding: 0.25em 1em;
  color: white;

  ::placeholder { 
    color: white;
  }

  @media only screen and (max-width: 800px) {
  height: 3em;
  margin: 2% 5%;
  margin-left: -10px;
  font-size: 10px;
  }
`;

export const Text = styled.textarea`
  width: 96%;
  margin: 2% 2%;
  border: 0;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  margin-left: 0px;
  border-radius: 0.3em;
  background: #8d8d8d;
  padding: 1.5em 1em;
  color: white;

  ::placeholder { 
    color: white;
  }

  @media only screen and (max-width: 800px) {
    margin: 1% 1%;
    margin-left: -10px;
    font-size: 10px;
    }
`;

