import React from "react";
import { Container, Checkbox, Slider } from './themebutton.styles';
import { ReactComponent as SunIcon } from "../../assets/switchImg/sun.svg";

import { ReactComponent as MoonIcon } from "../../assets/switchImg/moon.svg";
import { connect } from 'react-redux';
import {lightTheme, darkTheme} from '../../redux/theme.action';

class SwitchButton extends React.Component {

  render() {
    return (
      <Container>
        <Checkbox />{/* al click dello slider verifica se il tema passato al themeprovider è con il colore celeste come priamrio allora è il light altrimenti sarà il dark */}
        <Slider onClick={this.props.theme.primary==="#3EE8FA" ? this.props.lightTheme : this.props.darkTheme }>
          <SunIcon />
          <MoonIcon />
        </Slider>
      </Container>
    );
  }
}

//metodo che preleva lo stato. il parametro rappresenta tutti i dati del tema corrente
const mapStateToProps = (state) => {
  return { theme: state.switchTheme };// theme sarà il tema
}

//connect aggiorna il tema corrente al reducer 
export default connect(mapStateToProps, {lightTheme, darkTheme})(SwitchButton);