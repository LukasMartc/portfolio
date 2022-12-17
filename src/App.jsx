import { Fragment, useState } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AboutMe from './views/AboutMe'
import Contact from './views/Contact'
import Header from './views/Header'
import Projects from './views/Projects'
import Skills from './views/Skills'

function App() {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <div className='background'>
        <AboutMe />
        <Skills />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App
