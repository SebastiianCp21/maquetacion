import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './NavBar'
import BoxesInfo from './BoxsInfo'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <BoxesInfo />
  </StrictMode>,
)
