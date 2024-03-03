import React from 'react'
import ShowCase from '../components/ShowCase'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

function HomePage() {
  return (
    <div className='main'>
        <ShowCase/>
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <Contact/>
    </div>
  )
}

export default HomePage