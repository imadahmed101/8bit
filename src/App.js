import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Error from './pages/Error'
import Games from './pages/Games'
import New from './pages/New'
import Upcoming from './pages/Upcoming'
import Company from './pages/Company'
import Download from './pages/Download'
import Pacmanz from './pages/games/Pacmanz'
import Snakez from './pages/games/Snakez'
import Brickz from './pages/games/Brickz'
import Marioz from './pages/games/Marioz'
import Flappybirdz from './pages/games/Flappybirdz'



const App = () => {
  return (
  < BrowserRouter >
  <Navigation />
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/games" element={<Games />} />
    <Route path="/new" element={<New />} />
    <Route path="/upcoming" element={<Upcoming />} />
    <Route path="/company" element={<Company />} />
    <Route path="/download" element={<Download />} />
    <Route path="/pacmanz" element={<Pacmanz />} />
    <Route path="/snakez" element={<Snakez />} />
    <Route path="/brickz" element={<Brickz />} />
    <Route path="/marioz" element={<Marioz />} />
    <Route path="/flappybirdz" element={<Flappybirdz />} />
    <Route path="/*" element={<Error />} />
  </Routes>

</BrowserRouter >
  )
}

export default App
