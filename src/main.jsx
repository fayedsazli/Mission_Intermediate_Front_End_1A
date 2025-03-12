import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Navbar from './layout/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <Home />
  </StrictMode>,
)
