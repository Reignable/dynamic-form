import { css, Global } from '@emotion/react'
import reset from 'emotion-reset'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <App />
    <Global
      styles={css`
        ${reset}
        body {
          background: #070724;
        }
      `}
    />
  </StrictMode>,
  rootElement,
)
