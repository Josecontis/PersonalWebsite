
const theme = {
        primary: "#3EE8FA",
        second: "#008492",
        accent: "#02808D",
        background: "#1d1d1d",
        foreground: "#8B939C"
    };

// si parte da uno stato iniziale e si esegue un azione
const themeReducer = (state = theme, action) => {
    switch (action.type) // se il tipo di questa azione è nascondi popup carrello allora restituisci il falso di hidden
    {
        case 'LIGHT_THEME':
            return action.payload;
        case 'DARK_THEME':
            return action.payload;
        default:
            return state; //altrimenti restituisci lo stato non modificato
    }
};

export default themeReducer;
