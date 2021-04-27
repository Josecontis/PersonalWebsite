import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, Page, Container } from "./styles/global";

import Sidebar from "./components/Sidebar";

import Routes from "./routes";

export default function App() {
  const theme = {
    primary: "#3EE8FA",
    second: "#008492",
    accent: "#02808D",
    background: "#1d1d1d",
    foreground: "#8B939C"
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Sidebar />
        <Page>
          <Container>
            <Routes />
          </Container>
        </Page>
      </ThemeProvider>
    </Router>
  );
}