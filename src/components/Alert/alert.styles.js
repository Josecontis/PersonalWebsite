import styled from "styled-components";

const getAlertStyles = props => {
    return props.flag ? 'background-color: #4CAF50;' :' background-color: #f44336;';
  };

const setVisibility = props => {
    console.log(props.value);
    return props.value ? 'display: none' :' ';
};
  
export const Text = styled.div`
    text-align: center;
    font-size: 20px;
`;

export const Alert = styled.div`
    padding: 20px;
    color: white;
    opacity: 1;
    margin-left: 900px;
    transition: opacity 0.6s;
    margin-bottom: 15px;
    width: 600px;
    position: absolute;
    z-index:2;
   

    ${getAlertStyles}
    ${setVisibility}   
`;



export const CloseBtn = styled.button`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 25px;
    line-height: 20px;
    cursor: pointer;
    border: none;
    background: none;

    

    &:hover {
    color: black;
}
`;