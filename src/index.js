import './assets/css/index.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Store from './store/index.jsx'
// import reportWebVitals from './reportWebVitals'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8b788f',
      main: '#6e5773',
      dark: '#4d3c50',
      contrastText: '#fff',
    },
    type: 'dark',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
