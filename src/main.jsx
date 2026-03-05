import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BackendulrContext from './Context/BackendulrContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BackendulrContext>
      <App />
    </BackendulrContext>

  </StrictMode>,
)
