import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/styles.css"
import { MovieApp } from './MovieApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieApp />
  </StrictMode>,
)
