
//metodi per definire lo stato del popup e della lista degli item presenti nel carrello
export const lightTheme = () =>{
	return( {
		type: 'LIGHT_THEME',
		payload: {	
				primary: "white",
				second: "white",
				accent: "white",
				background: "white",
				foreground: "white"	
		}
	})
};

export const darkTheme = () => {
	return({
		type: 'DARK_THEME',
		payload: {	
				primary: "#3EE8FA",
        		second: "#008492",
				accent: "#02808D",
				background: "#1d1d1d",
				foreground: "#8B939C"	
		}
	})
};

 