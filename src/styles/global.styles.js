import styled, { createGlobalStyle, keyframes } from "styled-components";

const bganimation = keyframes`
 {
  0% { transform: translate(0,0) }
  10% { transform: translate(-5%,-5%) }
  20% { transform: translate(-10%,5%) }
  30% { transform: translate(5%,-10%) }
  40% { transform: translate(-5%,15%) }
  50% { transform: translate(-10%,5%) }
  60% { transform: translate(15%,0) }
  70% { transform: translate(0,10%) }
  80% { transform: translate(-15%,0) }
  90% { transform: translate(10%,5%) }
  100% { transform: translate(5%,0) }
}`;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
}
html {
  color: ${props => props.theme.foreground};
  font-size: 1em;
  line-height: 1.4em;
}
body {
  -webkit-font-smoothing: antialiased;
  background-color: ${props => props.theme.background};
  background: linear-gradient(-45deg,  ${props => props.theme.primary}, ${props => props.theme.second}, ${props => props.theme.background}, ${props => props.theme.background});
	background-size: 400% 400%;
	animation: gradient 5s ease;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.bg {
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
  animation: ${bganimation} .2s infinite;
  opacity: .9;
  visibility: visible;
}

body,
input,
button {
  font-family: Roboto, sans-serif;
}
img {
  max-width: 100%;
}
a {
  color: ${props => props.theme.accent};
  text-decoration: none
}
input:focus {
  border: 1px solid ${props => props.theme.second}
}
::selection {
  background: ${props => props.theme.second};
  color: #fff;
}
@font-face {
  font-family: 'Coolvetica';
  src:url('fonts/Coolvetica.ttf.woff') format('woff'),
      url('fonts/Coolvetica.ttf.svg#Coolvetica') format('svg'),
      url('fonts/Coolvetica.ttf.eot'),
      url('fonts/Coolvetica.ttf.eot?#iefix') format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
}
@media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
  html {
  max-width: 100vh;
  min-height: 100vw;
  max-height: 100vw;
  }
}
`;


export const Container = styled.div`
  position: absolute;
  will-change: contents;
  height: 94vh;
  width: 100%;
  margin: 0 auto;
  top: 5vh;
  bottom: 5vh;
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 94vw;
    min-width: 100vh;
    top: 5vw;
    bottom: 5vw;
  }
`;