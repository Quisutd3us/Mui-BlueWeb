import React from 'react'
import ReactDOM from 'react-dom/client'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    buttons:{
      main:'olive',
      secondary: 'rgba(47,47,47,0.6)',
    },
    text: {
      primary: 'rgba(30,30,30,0.87)',
      secondary: 'rgba(47,47,47,0.6)',
      disabled: 'rgba(59,59,59,0.38)',
    },
  },
});

import { CardItem } from "./components";


ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      {/* <App /> */}
      {/* <GridMui/> */}
      {/* <ProductItem/> */}
      <CardItem/>
    </React.StrictMode>
  </ThemeProvider>,

)
