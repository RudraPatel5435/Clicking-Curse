import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes}from "react-router-dom"
import GameScreen from './components/GameScreen.jsx'
import Instructions from './Components/Instructions.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/play' element={<GameScreen />} />
            <Route path='/instructions' element={<Instructions />} />
            {/* <Route path='/login' element={<Login />} /> */}
    </Routes>
    </BrowserRouter>
    </StrictMode>
)
