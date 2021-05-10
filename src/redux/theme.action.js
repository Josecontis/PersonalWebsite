//metodi per definire lo stato del popup e della lista degli item presenti nel carrello
export const lightTheme = () => {
  return {
    type: "LIGHT_THEME",
    payload: {
      primary: "white",
      second: "white",
      button: "black",
      background: "white",
      foreground: "#8B939C",
      text: "black",
      title: "black",
      date: "black",
      bgskill: "#1d1d1d",
      clogo: "#8B939C",
      glogo: "black",
    },
  };
};

export const darkTheme = () => {
  return {
    type: "DARK_THEME",
    payload: {
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
    },
  };
};
