import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './NavBar'
import BoxesInfo from './BoxsInfo'
import AsideInfo from './AsideInfo'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <BoxesInfo />
    <AsideInfo />
  </StrictMode>,
)
