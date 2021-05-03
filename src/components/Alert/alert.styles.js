import styled, { keyframes, css } from "styled-components";

export const Alert = styled.div`

    padding: 20px;
    background-color: #f44336;
    color: white;
    opacity: 1;
    transition: opacity 0.6s;
    margin-bottom: 15px;

    &.success {background-color: #4CAF50;}
`;

export const CloseBtn = styled.span`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;

    &:hover {
    color: black;
}
`;