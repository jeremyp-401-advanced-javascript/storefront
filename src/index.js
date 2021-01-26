import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '@fontsource/league-spartan';
import "@fontsource/blackout-two-am"
import './index.css';
import App from './App';

let theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Blackout Two AM',
      fontSize: 36,
      marginTop: '-20px',
      whiteSpace: 'nowrap',
    },
    fontFamily: [
      'League Spartan',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
