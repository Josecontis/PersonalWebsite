import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import { connect } from 'react-redux';
// import {selectTheme} from './redux/theme.action';

import { GlobalStyle, Container } from "./styles/global.styles";

import Sidebar from "./components/Sidebar/sidebar.component";
import { connect } from "react-redux";
import Routes from "./routes";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={this.props.theme}>
          {/* tema effettivo che si aggiorna ogni volta grazie allo store nel provider */}
          <GlobalStyle />
          <Sidebar />
          <Container>
            <Routes />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

//metodo che preleva lo stato. il parametro rappresenta tutti i dati del tema corrente
const mapStateToProps = (state) => {
  return { theme: state.switchTheme }; // theme sarà il tema
};

export default connect(mapStateToProps)(App);
