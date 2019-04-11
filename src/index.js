import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "'Roboto', sans-serif",
    textTransform: "none"
  },
  palette: {
    primary: {
      main: amber[500],
      dark: amber[900],
      light: amber[100]
    },
    accent: "#8BC34A",
    textPrimary: "#212121",
    textSecondary: "#757575",
    divider: "#BDBDBD"
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App/>
  </MuiThemeProvider>, 
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
