import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Functions } from './Functions/Functions.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Functions>
  <React.StrictMode>
      <App />
  </React.StrictMode>,
    </Functions>
)
