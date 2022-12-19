import { StrictMode, useEffect } from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.min.css'
import './index.css'
import { StateProvider } from 'StateProvider'
import reducer, { initialState } from './reducer'
import App from './App'
import reportWebVitals from './reportWebVitals'



render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
