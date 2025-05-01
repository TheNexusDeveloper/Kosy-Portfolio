import React from 'react'
import ShowCase from '../components/ShowCase'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
// import ComingSoon from '../components/ComingSoon'

function HomePage() {
  return (
    <div className='main'>
        <ShowCase/>
        <About/>
        <div className='gradient-bg'>
            <Services/>
            <Skills/>
            <Projects/>
            {/* <ComingSoon/> */}
            <Certifications/>
        </div>
        <Contact/>
    </div>
  )
}

export default HomePage