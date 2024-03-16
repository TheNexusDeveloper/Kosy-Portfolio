import React from 'react'
import './ShowCase.css'
import { Button, Container } from 'react-bootstrap'

function ShowCase() {
  return (
    <div className='showcase pt-3' style={{display: 'flex', alignItems: 'center'}}>
         <Container>
                    <div className="showcase-text">
                        <h2>Hey there 🫡, My name is </h2>
                        <h1>KOSY OKEKE</h1>
                        <h1>Software Developer </h1>
                        <p>
                            A Tech Bro with interest in Web design, web development, Mobile Applications, Network Engineering and DevOps Engineering.
                            My ultimate goal is to create innovative solutions with technology to aid advancements and create an enabling environment
                            for everyone to succeed 
                        </p>

                        <a href='https://drive.google.com/file/d/10NlFGzS0GGt8poSJiNkozkYLgXDZiRRP/view?usp=sharing' target='_blank' rel='noreferrer'><Button variant='outline-info' className='rounded-5' size='lg'>Get my Resume</Button></a>
                    </div>
        </Container>
    </div>
  )
}

export default ShowCase