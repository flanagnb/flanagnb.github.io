import React from 'react'
import ReactDOM from 'react-dom/client'
import WelcomeBanner from './WelcomeBanner.jsx'

ReactDOM.createRoot(document.getElementById('welcome-banner')).render(
  <React.StrictMode>
    <WelcomeBanner/>
  </React.StrictMode>,
)
