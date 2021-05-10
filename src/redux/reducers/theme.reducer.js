const theme = {
  primary: "#3EE8FA",
  second: "#008492",
  button: "#3EE8FA",
  background: "#1d1d1d",
  foreground: "#8B939C",
  text: "white",
  title: "#3EE8FA",
  date: "#3EE8FA",
  bgskill: "#1d1d1d",
  clogo: "#3EE8FA",
  glogo: "#008492",
};

// si parte da uno stato iniziale e si esegue un azione
const themeReducer = (state = theme, action) => {
  switch (
    action.type // se il tipo di questa azione è nascondi popup carrello allora restituisci il falso di hidden
  ) {
    case "LIGHT_THEME":
      return action.payload;
    case "DARK_THEME":
      return action.payload;
    default:
      return state; //altrimenti restituisci lo stato non modificato
  }
};

export default themeReducer;
