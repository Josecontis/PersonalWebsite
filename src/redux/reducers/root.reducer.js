import {combineReducers} from 'redux';
import themeReducer from './theme.reducer'

// qui viene esportato il payload corrispondente allo stato corrente del tema, sotto la voce switchTheme
export default combineReducers({
    switchTheme: themeReducer,
});