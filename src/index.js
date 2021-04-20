import './assets/css/index.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
// import reportWebVitals from './reportWebVitals'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#dc7d93',
      main: '#d45d79',
      dark: '#944154',
      contrastText: '#fff',
    },
    type: 'dark',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
