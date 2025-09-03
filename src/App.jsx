import React from 'react'
import Home from './pages/Home'
import Skills from './components/Skills'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CustomCursor from './utils/CursorAnimation'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className='font-sora scroll-smooth overflow-x-hidden'>
      <CustomCursor/>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
