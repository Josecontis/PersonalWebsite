import React from "react";
import { Container, Checkbox, Slider } from './themebutton.styles';
import { ReactComponent as SunIcon } from "../../assets/switchImg/sun.svg";

import { ReactComponent as MoonIcon } from "../../assets/switchImg/moon.svg";
import { connect } from 'react-redux';
import {lightTheme, darkTheme} from '../../redux/theme.action';

class SwitchButton extends React.Component {

  render() {console.log(this.props.theme);
    return (
      <Container>
        <Checkbox />
        <Slider onClick={this.props.theme.primary==="#3EE8FA" ? this.props.lightTheme : this.props.darkTheme }>
          <SunIcon />
          <MoonIcon />
        </Slider>
      </Container>
    );
  }
}

//metodo che preleva lo stato. il parametro rappresenta tutti i dati nel redux store
const mapStateToProps = (state) => {
  return { theme: state.switchTheme };
}

export default connect(mapStateToProps, {lightTheme, darkTheme})(SwitchButton);