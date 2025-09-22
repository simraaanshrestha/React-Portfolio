import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Cards from './pages/Cards'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
const App = () => {
  const [theme, setTheme] = useState('dark');
  


  return (
    <>
      <BrowserRouter>
      
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path="/" element={<Home theme = {theme}/>} />
        <Route path="/about" element={<About theme = {theme} />} />
        <Route path="/skills" element={<Skills theme = {theme}/>} />
        <Route path="/projects" element={<Projects theme = {theme}/>} />
        <Route path="/contact" element={<Footer theme = {theme}/>} />
      </Routes>
      </div>
      {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
