import { Fragment } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import AboutMe from '../layouts/AboutMe'
import Contact from '../layouts/Contact'
import Header from '../layouts/Header'
import Projects from '../layouts/Projects'
import Skills from '../layouts/Skills'

const Home = () => {
  return (
    <Fragment>
        <NavBar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </Fragment>
  )
}

export default Home