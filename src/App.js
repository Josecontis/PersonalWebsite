import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, Container } from "./styles/global.styles";

import Sidebar from "./components/Sidebar/sidebar.component";

import Routes from "./routes";

export default function App() {

  const [theme, setTheme] = useState({
    primary: "#3EE8FA",
    second: "#008492",
    accent: "#02808D",
    background: "#1d1d1d",
    foreground: "#8B939C"
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Sidebar />
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </Router>
  );
}
