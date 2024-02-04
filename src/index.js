import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

export const theme = {
  colors: {
    accent: '#BEDBB0',
    whiteColor: '#FFFFFF',
    blackColor: '#161616',
    darkThemePrimary: '#1F1F1F',
    darkThemeSecondary: '#121212',
    ligthThemePrimary: '#F6F6F7',
    ligthThemeSecondary: '#FCFCFC',
    violetThemeAccent: '#5255BC',
    violetThemePrimary: '#D9D9D9',
    violetThemeSecondary: '#B8BCFD',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/team-five">
        <App />
        <GlobalStyles />{' '}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
