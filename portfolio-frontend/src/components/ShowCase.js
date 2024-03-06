import React from 'react'
import './ShowCase.css'
import { Button, Container } from 'react-bootstrap'

function ShowCase() {
  return (
    <div className='showcase' style={{display: 'flex', alignItems: 'center'}}>
         <Container>
                    <div className="showcase-text">
                        <h2>Hey there 🫡, My name is </h2>
                        <h1>KOSY OKEKE</h1>
                        <h1>Software Developer </h1>
                        <p>
                            A software Developer with major focus on Front-End Web development, Backend development, 
                            network design and infrastructure, cloud computing and DevOps Engineering.
                        </p>
        
                        {/* <a href="Resume - Kosisochukwu Okeke.pdf" target="_blank">Get My Resume </a> */}

                        <a href='https://drive.google.com/file/d/103FWHOAf8TnWtpx98QXOH10ryLCsXeU3/view?usp=drive_link' target='_blank' rel='noreferrer'><Button variant='outline-info' className='rounded-5' size='lg'>Get my Resume</Button></a>
                    </div>
        </Container>
    </div>
  )
}

export default ShowCase