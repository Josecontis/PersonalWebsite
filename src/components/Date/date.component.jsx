import React from "react";
import { DateStyle, SubDate, MonthStyle, Container } from './date.styles';

class HomePageDate extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date().getDate(),
      month: new Date().getMonth(),
      monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
    };
  }

  render() {
    return (
      <Container>
        <DateStyle>
          <span>{(this.state.date<10)?'0'+this.state.date:this.state.date}</span>
        </DateStyle>
        <div>
          <MonthStyle>
          <span>{this.state.monthNames[this.state.month]}</span></MonthStyle>
          <SubDate><span>Disponibile per lavoro</span></SubDate>
        </div>
      </Container>
    );
  };
}

export default HomePageDate;