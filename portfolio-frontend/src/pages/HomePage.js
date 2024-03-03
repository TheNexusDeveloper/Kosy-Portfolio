import React from 'react'
import ShowCase from '../components/ShowCase'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'

function HomePage() {
  return (
    <div className='main'>
        <ShowCase/>
        <About/>
        <Services/>
        <Skills/>
    </div>
  )
}

export default HomePage