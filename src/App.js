import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import { connect } from 'react-redux';
// import {selectTheme} from './redux/theme.action';

import { GlobalStyle, Container } from "./styles/global.styles";

import Sidebar from "./components/Sidebar/sidebar.component";
import {connect} from 'react-redux';
import Routes from "./routes";

class App extends React.Component {

  render() {
    return (
      <Router>
        <ThemeProvider theme={this.props.theme}>
          <GlobalStyle />
          <Sidebar />
          <Container>
            <Routes />
          </Container>
        </ThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps =(state)=>{
  return {theme: state.switchTheme}
}


export default connect(mapStateToProps)(App);
